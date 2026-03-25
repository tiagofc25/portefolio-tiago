interface LanguageHoverSwitchProps {
  isEnglish: boolean;
  isLightMode: boolean;
  onToggleLanguage: () => void;
}

export default function LanguageHoverSwitch({
  isEnglish,
  isLightMode,
  onToggleLanguage,
}: LanguageHoverSwitchProps) {
  const currentLabel = isEnglish ? "EN" : "FR";
  const nextLabel = isEnglish ? "FR" : "EN";

  return (
    <div
      className={`group inline-flex h-9 w-[3.4rem] items-center overflow-hidden rounded-full border transition-all duration-300 hover:w-[7rem] ${
        isLightMode
          ? "border-slate-300 bg-white"
          : "border-white/20 bg-white/10"
      }`}
      aria-label={isEnglish ? "Language switch" : "Sélecteur de langue"}
    >
      <span
        className={`flex h-full w-[3.4rem] shrink-0 items-center justify-center text-xs font-semibold ${
          isLightMode ? "text-slate-800" : "text-slate-200"
        }`}
      >
        {currentLabel}
      </span>

      <button
        type="button"
        onClick={onToggleLanguage}
        className={`flex h-full w-[3.6rem] shrink-0 items-center justify-center text-xs font-semibold transition-all duration-200 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto ${
          isLightMode
            ? "text-slate-900 hover:bg-slate-100"
            : "text-white hover:bg-white/10"
        }`}
        aria-label={
          isEnglish
            ? "Switch language to French"
            : "Passer la langue en anglais"
        }
      >
        {nextLabel}
      </button>
    </div>
  );
}
