import { useId } from "react";
import styled from "styled-components";

interface ThemeSwitchProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
}

export default function ThemeSwitch({
  checked,
  onChange,
  ariaLabel = "Toggle theme",
}: ThemeSwitchProps) {
  const inputId = useId();
  const maskId = `${inputId}-moon-mask`;

  return (
    <StyledWrapper>
      <label
        htmlFor={inputId}
        className="themeToggle st-sunMoonThemeToggleBtn"
        aria-label={ariaLabel}
      >
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
          id={inputId}
          className="themeToggleInput"
        />
        <svg
          width={18}
          height={18}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
          aria-hidden="true"
        >
          <mask id={maskId}>
            <rect x={0} y={0} width={20} height={20} fill="white" />
            <circle cx={11} cy={3} r={8} fill="black" />
          </mask>
          <circle
            className="sunMoon"
            cx={10}
            cy={10}
            r={8}
            mask={`url(#${maskId})`}
          />
          <g>
            <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
            <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
            <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
            <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
            <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
          </g>
        </svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .themeToggle {
    color: #e5e7eb;
    width: 3.2rem;
    height: 2.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.25s ease;
  }

  .themeToggle:hover {
    border-color: rgba(148, 163, 184, 0.55);
  }

  .st-sunMoonThemeToggleBtn {
    position: relative;
    cursor: pointer;
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
  }

  .st-sunMoonThemeToggleBtn svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.75rem;
    height: 1.75rem;
    transition: transform 0.4s ease;
    transform: translate(-50%, -50%) rotate(40deg);
  }

  .st-sunMoonThemeToggleBtn svg .sunMoon {
    transform-origin: center center;
    transition: inherit;
    transform: scale(1);
  }

  .st-sunMoonThemeToggleBtn svg .sunRay {
    transform-origin: center center;
    transform: scale(0);
  }

  .st-sunMoonThemeToggleBtn svg mask > circle {
    transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
    transform: translate(0px, 0px);
  }

  .st-sunMoonThemeToggleBtn svg .sunRay2 {
    animation-delay: 0.05s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay3 {
    animation-delay: 0.1s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay4 {
    animation-delay: 0.17s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    animation-delay: 0.25s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay6 {
    animation-delay: 0.29s !important;
  }

  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg {
    color: #334155;
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg mask > circle {
    transform: translate(16px, -3px);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunMoon {
    transform: scale(0.55);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunRay {
    animation: showRay1832 0.4s ease 0s 1 forwards;
  }

  @keyframes showRay1832 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
