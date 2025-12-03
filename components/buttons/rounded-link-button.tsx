import React, { ReactNode } from "react";

interface RoundedLinkButtonProps {
  children: ReactNode;
  href: string;
  size?: "small" | "big";
}

export default function RoundedLinkButton({
  children,
  href,
  size = "small",
}: RoundedLinkButtonProps) {
  const styles = {
    small: "px-6 py-2 text-sm",
    big: "px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg",
  };

  return (
    <a
      href={href}
      className={`bg-green-600 text-white rounded-full font-medium transition-colors hover:bg-green-700 shadow-sm inline-block ${styles[size]}`}
    >
      {children}
    </a>
  );
}
