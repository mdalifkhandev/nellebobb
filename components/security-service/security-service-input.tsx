import { EmailIcon, LocationPinIcon } from "./security-service-icons";

type SecurityServiceInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: "location" | "email";
  error?: string;
};

export function SecurityServiceInput({
  label,
  value,
  onChange,
  icon = "location",
  error,
}: SecurityServiceInputProps) {
  const Icon = icon === "email" ? EmailIcon : LocationPinIcon;

  return (
    <div className="space-y-1.5">
      <label
        className={`flex h-12 w-full items-center gap-3 rounded-md border border-b-[0.3px] bg-[#f3f8f4] px-3 py-3 transition focus-within:ring-2 ${
          error
            ? "border-[#d14343] focus-within:ring-[#d14343]/20"
            : "border-[#e8ebe6] focus-within:ring-[#015555]/20"
        }`}
      >
        <Icon className={`h-5 w-4.25 shrink-0 ${error ? "text-[#d14343]" : "text-[#015555]"}`} />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={label}
          aria-invalid={Boolean(error)}
          className="min-w-0 flex-1 bg-transparent text-sm font-medium tracking-[0.07px] text-[#4d4d4d] placeholder:text-[#4d4d4d]/90 focus:outline-none"
        />
      </label>
      {error ? <p className="px-1 text-xs font-medium text-[#d14343]">{error}</p> : null}
    </div>
  );
}
