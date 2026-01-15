export default function ToggleButton({
  isOn, onToggle, onIcon, offIcon, buttonClass, ariaLabel
}) {

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
    >
      {isOn ? onIcon : offIcon}
    </button>
  );
}
