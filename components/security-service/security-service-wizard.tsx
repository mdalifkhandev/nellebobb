"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { securityServiceSteps, wizardTotalSteps } from "./security-service-flow-data";
import { SecurityServiceInput } from "./security-service-input";
import { SecurityServiceOption } from "./security-service-option";
import { SecurityServiceWizardShell } from "./security-service-wizard-shell";

const ACTION_BUTTON_BASE =
  "inline-flex h-9 w-full items-center justify-center rounded-[8px] px-6 text-sm font-bold tracking-[0.2394px] text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015555]/30 sm:h-10 sm:w-auto";

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

export function SecurityServiceWizard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [selectedByStep, setSelectedByStep] = useState<Record<number, number>>({});

  const currentStep = clampStep(Number(searchParams.get("step") ?? "1"));
  const step = securityServiceSteps[currentStep - 1] ?? securityServiceSteps[0];
  const progress = progressForStep(currentStep);

  const goToStep = (nextStep: number) => {
    router.push(`${pathname}?step=${clampStep(nextStep)}`);
  };

  const backStep = currentStep === 1 ? 1 : currentStep - 1;

  const primaryAction =
    step.kind === "input"
      ? "Send to admin email"
      : currentStep === wizardTotalSteps
        ? undefined
        : "Next";

  return (
    <div className="mx-auto w-full max-w-[728px]">
      {step.kind === "success" ? (
        <SecurityServiceWizardShell
          title={step.title}
          subtitle={step.subtitle}
          onClose={() => router.push("/")}
          showProgress={false}
        >
          <></>
        </SecurityServiceWizardShell>
      ) : (
        <SecurityServiceWizardShell
          progress={progress}
          title={step.title}
          subtitle={step.kind === "input" ? step.subtitle : undefined}
          onClose={() => router.push("/")}
          actions={
            <>
              <button
                type="button"
                onClick={() => (currentStep === 1 ? router.push("/") : goToStep(backStep))}
                className={`${ACTION_BUTTON_BASE} sm:min-w-[102px] bg-[#1c252e] px-5 hover:bg-[#26313d] sm:px-6`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  if (step.kind === "choice") {
                    goToStep(currentStep + 1);
                    return;
                  }

                  if (step.kind === "input") {
                    goToStep(currentStep + 1);
                  }
                }}
                className={`${ACTION_BUTTON_BASE} ${step.kind === "input" ? "sm:min-w-[150px]" : "sm:min-w-[102px]"} bg-[linear-gradient(149.405deg,#0ba8dd_4.4863%,#60d8ff_27.566%,#0ba8dd_56.038%)] px-5 shadow-[0_10px_24px_-14px_rgba(11,168,221,0.9)] hover:brightness-105 sm:px-6`}
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
              <SecurityServiceInput
                label={step.fields[0]?.placeholder ?? ""}
                value={address}
                onChange={setAddress}
              />
              <SecurityServiceInput
                label={step.fields[1]?.placeholder ?? ""}
                value={location}
                onChange={setLocation}
              />
            </div>
          ) : null}
        </SecurityServiceWizardShell>
      )}
    </div>
  );
}
