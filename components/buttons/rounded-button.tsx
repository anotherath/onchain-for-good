import React, { ReactNode } from "react";

interface RoundedButtonProps {
  children: ReactNode;
  size?: "small" | "big";
}

export default function RoundedButton({
  children,
  size = "small",
}: RoundedButtonProps) {
  const stype = {
    small: "px-6 py-2 text-sm",
    big: "px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg",
  };

  return (
    <button
      className={`bg-green-600 text-white rounded-full font-medium transition-colors hover:bg-green-700 shadow-sms ${stype[size]}`}
    >
      {children}
    </button>
  );
}
