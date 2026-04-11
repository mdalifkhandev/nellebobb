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
      className={[
        "shine-button flex h-12 w-full items-center gap-3 rounded-md border px-3 py-3 text-left text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#015555]/30",
        selected
          ? "border-[#54d7d2] bg-[linear-gradient(135deg,#0b7f82_0%,#015555_100%)]"
          : "border-[#0a6d6b] bg-[linear-gradient(135deg,#11888b_0%,#015555_100%)] hover:bg-[linear-gradient(135deg,#14979a_0%,#026362_100%)]",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-6 w-6 items-center justify-center rounded-full border bg-white/12",
          selected ? "border-[#b5fffb]" : "border-white/30",
        ].join(" ")}
      >
        <span
          className={[
            "h-3 w-3 rounded-full bg-white transition-opacity",
            selected ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      </span>
      <span className="flex-1 text-sm font-medium tracking-[0.07px] text-white">{label}</span>
    </button>
  );
}
