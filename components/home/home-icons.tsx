import type { ComponentType } from "react";

export type IconProps = {
  className?: string;
};

export const SearchIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M11 19a8 8 0 1 1 5.29-14.03A8 8 0 0 1 11 19Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4.5 6.75h15a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="m5.5 8 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const PlayIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M8.5 6.8v10.4c0 .7.8 1.1 1.4.7l8.2-5.2a.8.8 0 0 0 0-1.4l-8.2-5.2c-.6-.4-1.4 0-1.4.7Z"
      fill="currentColor"
    />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 16.9 6.2 20.2l1.1-6.6-4.8-4.7 6.6-.9L12 2Z" />
  </svg>
);

export const QuoteMark = () => (
  <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#c0c8d8]" aria-hidden="true">
    <path
      d="M10.1 4.5v4.1c0 4-2.4 7.1-6.1 8.4l-.9-2c1.9-.7 3.1-1.9 3.4-3.6H4V4.5h6.1Zm12 0v4.1c0 4-2.4 7.1-6.1 8.4l-.9-2c1.9-.7 3.1-1.9 3.4-3.6h-2.8V4.5h6.1Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="m14.5 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="m9.5 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.6-1.5h1.3V5a17 17 0 0 0-2-.1c-2 0-3.4 1.2-3.4 3.5V11H9v3h2v7h2.5Z" />
  </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

export const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M6.4 8H3.8V21h2.6V8ZM5.1 3.2A1.7 1.7 0 1 0 5.1 6.6a1.7 1.7 0 0 0 0-3.4ZM21 21h-2.6v-6.4c0-1.5-.6-2.5-2.1-2.5-1.1 0-1.7.8-2 1.6-.1.3-.1.8-.1 1.3V21H11.7s.1-10.8 0-13h2.6v1.8c.3-.9 1.6-2.1 3.6-2.1 2.6 0 4.5 1.7 4.5 5.3V21Z" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M8.4 4.8c.5-.5 1.2-.5 1.7-.2l1.9 1.1c.6.3.8 1.1.5 1.7l-1 1.7c-.2.4-.2.9.1 1.3 1.1 1.8 2.5 3.2 4.3 4.3.4.3.9.3 1.3.1l1.7-1c.6-.3 1.3-.1 1.7.5l1.1 1.9c.3.5.2 1.2-.2 1.7l-1 1.1c-.6.7-1.5 1-2.4.8-6.8-1.4-12.1-6.7-13.5-13.5-.2-.9.1-1.8.8-2.4l1.1-1Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const LocationIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 21s6-5.2 6-10.2A6 6 0 0 0 6 10.8C6 15.8 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export type IconComponent = ComponentType<IconProps>;
