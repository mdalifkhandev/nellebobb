"use client";

import { SecurityServiceWizard } from "./security-service-wizard";

type SecurityServiceWizardModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SecurityServiceWizardModal({ open, onClose }: SecurityServiceWizardModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
    >
      <div onClick={(event) => event.stopPropagation()} className="w-full max-w-182">
        <SecurityServiceWizard onClose={onClose} />
      </div>
    </div>
  );
}
