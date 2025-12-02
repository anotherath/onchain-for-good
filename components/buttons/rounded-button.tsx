import React, { ReactNode } from "react";

interface RoundedButtonProps {
  children: ReactNode;
  className?: string; // optional, để truyền thêm class
}

export default function RoundedButton({
  children,
  className = "",
}: RoundedButtonProps) {
  return (
    <button
      className={`bg-green-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-green-700 transition-colors shadow-sm ${className}`}
    >
      {children}
    </button>
  );
}
