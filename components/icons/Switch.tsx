import React, { useState } from "react";

interface SwitchProps {
  isOn?: boolean;
  onToggle?: (value: boolean) => void;
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle, disabled }) => {
  const [on, toggle] = useState<boolean>(isOn ?? false);

  return (
    <button
      disabled={disabled}
      onClick={() => {
        toggle(!on);
        onToggle?.(!on);
      }}
      className={`relative inline-flex h-5 w-10 items-center rounded-full shadow-inner shadow-slate-500/40 outline-none transition-colors ${
        on ? "bg-red-500/70" : "bg-slate-200/20"
      } `}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          on ? "translate-x-5" : "translate-x-0"
        } ${disabled ? "bg-slate-50/40" : ""}`}
      />
    </button>
  );
};

export default Switch;
