type SecurityServiceOptionProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

export function SecurityServiceOption({ label, selected, onClick }: SecurityServiceOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 w-full items-center gap-3 rounded-md border border-[#e8ebe6] border-b-[0.3px] bg-[#f3f8f4] px-3 py-3 text-left transition hover:bg-[#eef6ef] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015555]/30"
    >
      <span
        className={[
          "flex h-6 w-6 items-center justify-center rounded-full border bg-[#f4f7f2]",
          selected ? "border-[#2b9292]" : "border-[#e8ebe6]",
        ].join(" ")}
      >
        <span
          className={[
            "h-3 w-3 rounded-full bg-[#2b9292] transition-opacity",
            selected ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      </span>
      <span className="flex-1 text-sm font-medium tracking-[0.07px] text-[#4d4d4d]">{label}</span>
    </button>
  );
}
