"use client";

import { useState } from "react";

import { EmailAdminModal } from "./email-admin-modal";

type ContactUsButtonProps = {
  className?: string;
};

export function ContactUsButton({ className }: ContactUsButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Contact Us
      </button>
      <EmailAdminModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
