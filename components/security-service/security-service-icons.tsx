type IconProps = {
  className?: string;
};

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path d="M4 4L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LocationPinIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 22"
      fill="none"
      className={className}
    >
      <path
        d="M9 20.25C9 20.25 16.5 13.392 16.5 8.25C16.5 4.10786 13.1421 0.75 9 0.75C4.85786 0.75 1.5 4.10786 1.5 8.25C1.5 13.392 9 20.25 9 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="8.25" r="2.25" fill="currentColor" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <rect
        x="2.25"
        y="4.25"
        width="15.5"
        height="11.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.75 6L9.03 9.96C9.62 10.4 10.38 10.4 10.97 9.96L16.25 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M6.13 2.5h2.04c.39 0 .72.27.81.65l.54 2.32a.84.84 0 0 1-.24.8L8 7.55a10.5 10.5 0 0 0 4.45 4.45l1.28-1.28a.84.84 0 0 1 .8-.24l2.32.54c.38.09.65.42.65.81v2.04c0 .46-.37.83-.83.83C8.9 14.7 5.3 11.1 5.3 6.13c0-.46.37-.83.83-.83Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

