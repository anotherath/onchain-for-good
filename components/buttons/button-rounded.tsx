import React, { ReactNode } from "react";

interface ButtonRoundedProps {
  children: ReactNode;
  className?: string; // optional, để truyền thêm class
}

export default function ButtonRounded({
  children,
  className = "",
}: ButtonRoundedProps) {
  return (
    <button
      className={`bg-green-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-green-700 transition-colors shadow-sm ${className}`}
    >
      {children}
    </button>
  );
}
