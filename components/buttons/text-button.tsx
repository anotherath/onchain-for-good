import Link from "next/link";

type TextButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export default function TextButton({
  href,
  children,
  className = "",
  external = false,
}: TextButtonProps) {
  const baseClass =
    "inline-flex items-center gap-1 text-green-600 font-semibold hover:text-green-700 transition-colors";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {children}
    </Link>
  );
}
