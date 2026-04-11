import { LocationPinIcon } from "./security-service-icons";

type SecurityServiceInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function SecurityServiceInput({ label, value, onChange }: SecurityServiceInputProps) {
  return (
    <label className="flex h-12 w-full items-center gap-3 rounded-md border border-[#e8ebe6] border-b-[0.3px] bg-[#f3f8f4] px-3 py-3 transition focus-within:ring-2 focus-within:ring-[#015555]/20">
      <LocationPinIcon className="h-5 w-4.25 shrink-0 text-[#015555]" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        className="min-w-0 flex-1 bg-transparent text-sm font-medium tracking-[0.07px] text-[#4d4d4d] placeholder:text-[#4d4d4d]/90 focus:outline-none"
      />
    </label>
  );
}
