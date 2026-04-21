"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { securityServiceSteps, wizardTotalSteps } from "./security-service-flow-data";
import { SecurityServiceInput } from "./security-service-input";
import { SecurityServiceOption } from "./security-service-option";
import { SecurityServiceSuccessCard } from "./security-service-success-card";
import { SecurityServiceWizardShell } from "./security-service-wizard-shell";

const ACTION_BUTTON_BASE =
  "shine-button inline-flex h-9 w-full items-center justify-center rounded-lg px-6 text-sm font-bold tracking-[0.2394px] text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015555]/30 sm:h-10 sm:w-auto";

function clampStep(step: number) {
  if (Number.isNaN(step)) {
    return 1;
  }

  return Math.min(Math.max(step, 1), wizardTotalSteps);
}

function progressForStep(step: number) {
  if (wizardTotalSteps <= 1) {
    return 100;
  }

  return 12 + ((step - 1) / (wizardTotalSteps - 1)) * 83;
}

type SecurityServiceWizardProps = {
  onClose?: () => void;
};

export function SecurityServiceWizard({ onClose }: SecurityServiceWizardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({});
  const [selectedByStep, setSelectedByStep] = useState<Record<number, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const step = securityServiceSteps[currentStep - 1] ?? securityServiceSteps[0];
  const progress = progressForStep(currentStep);

  const goToStep = (nextStep: number) => {
    setCurrentStep(clampStep(nextStep));
  };

  const backStep = currentStep === 1 ? 1 : currentStep - 1;

  const primaryAction =
    step.kind === "input"
      ? "Send to admin email"
      : currentStep === wizardTotalSteps
        ? undefined
        : "Next";

  const buildStepAnswers = () =>
    securityServiceSteps
      .filter((item) => item.kind === "choice")
      .map((item) => {
        const selectedIndex =
          selectedByStep[item.id] ?? item.defaultSelectedIndex ?? -1;
        const answer =
          selectedIndex >= 0 ? item.options[selectedIndex] : "Not selected";

        return {
          stepId: item.id,
          question: item.title,
          answer,
        };
      });

  const getErrorMessage = async (response: Response) => {
    try {
      const data = (await response.json()) as { error?: string };
      return data.error || "Email send failed. Please try again.";
    } catch {
      return "Email send failed. Please try again.";
    }
  };

  const validateInputFields = () => {
    if (step.kind !== "input") {
      return {};
    }

    return step.fields.reduce<Record<string, string>>((errors, field) => {
      if ((inputValues[field.id] ?? "").trim()) {
        return errors;
      }

      errors[field.id] = `${field.label.replace(/^Enter your\s+/i, "")} is required`;
      return errors;
    }, {});
  };

  const getFieldIcon = (fieldId: string) => {
    const normalizedId = fieldId.trim().toLowerCase();

    if (normalizedId === "name" || normalizedId === "full name") {
      return "user" as const;
    }

    if (normalizedId === "email") {
      return "email" as const;
    }

    if (normalizedId === "phone number" || normalizedId === "phone") {
      return "phone" as const;
    }

    return "location" as const;
  };

  return (
    <div className="mx-auto w-full max-w-182">
      {step.kind === "success" ? (
        <SecurityServiceSuccessCard
          title={step.title}
          subtitle={step.subtitle}
          onClose={onClose ?? (() => router.push(pathname))}
        />
      ) : (
        <SecurityServiceWizardShell
          progress={progress}
          title={step.title}
          subtitle={step.kind === "input" ? step.subtitle : undefined}
          onClose={onClose ?? (() => router.push(pathname))}
          actions={
            <>
              <button
                type="button"
                onClick={() => (currentStep === 1 ? (onClose ? onClose() : router.push(pathname)) : goToStep(backStep))}
                className={`${ACTION_BUTTON_BASE} sm:min-w-25.5 bg-[#1c252e] px-5 hover:bg-[#26313d] sm:px-6`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={async () => {
                  if (step.kind === "choice") {
                    goToStep(currentStep + 1);
                    return;
                  }

                  if (step.kind === "input") {
                    if (isSubmitting) {
                      return;
                    }

                    const validationErrors = validateInputFields();

                    if (Object.keys(validationErrors).length > 0) {
                      setInputErrors(validationErrors);
                      return;
                    }

                    setInputErrors({});
                    setIsSubmitting(true);

                    try {
                      const response = await fetch("/api/security-service-contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          stepAnswers: buildStepAnswers(),
                          phoneNumber:
                            inputValues["Phone Number"] ?? inputValues.phone ?? "",
                          ...inputValues,
                        }),
                      });

                      if (!response.ok) {
                        throw new Error(await getErrorMessage(response));
                      }

                      goToStep(currentStep + 1);
                    } catch (error) {
                      console.error(error);
                      window.alert(error instanceof Error ? error.message : "Email send failed. Please try again.");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }
                }}
                disabled={isSubmitting}
                className={`${ACTION_BUTTON_BASE} ${step.kind === "input" ? "sm:min-w-37.5" : "sm:min-w-25.5"} bg-[linear-gradient(149.405deg,#0ba8dd_4.4863%,#60d8ff_27.566%,#0ba8dd_56.038%)] px-5 shadow-[0_10px_24px_-14px_rgba(11,168,221,0.9)] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:px-6`}
              >
                {primaryAction}
              </button>
            </>
          }
        >
          {step.kind === "choice" ? (
            <div className="space-y-2">
              {(() => {
                const selectedIndex = selectedByStep[step.id] ?? step.defaultSelectedIndex ?? -1;

                return step.options.map((option, index) => (
                  <SecurityServiceOption
                    key={option}
                    label={option}
                    selected={selectedIndex === index}
                    onClick={() =>
                      setSelectedByStep((current) => ({
                        ...current,
                        [step.id]: index,
                      }))
                    }
                  />
                ));
              })()}
            </div>
          ) : step.kind === "input" ? (
            <div className="space-y-4">
              {step.fields.map((field) => (
                <SecurityServiceInput
                  key={field.id}
                  label={field.placeholder}
                  value={inputValues[field.id] ?? ""}
                  onChange={(value) =>
                    {
                      setInputValues((current) => ({
                        ...current,
                        [field.id]: value,
                      }));
                      setInputErrors((current) => {
                        if (!current[field.id]) {
                          return current;
                        }

                        const nextErrors = { ...current };
                        delete nextErrors[field.id];
                        return nextErrors;
                      });
                    }
                  }
                  icon={getFieldIcon(field.id)}
                  error={inputErrors[field.id]}
                />
              ))}
            </div>
          ) : null}
        </SecurityServiceWizardShell>
      )}
    </div>
  );
}
