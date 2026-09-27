interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  /** "orange": fundo laranja + texto branco (padrão). "white": fundo branco + texto laranja (sobre fundo laranja). */
  variant?: "orange" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href,
  children,
  variant = "orange",
  size = "md",
  className = "",
  onClick,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap text-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes =
    size === "lg"
      ? "px-8 py-4 text-base md:text-lg"
      : size === "sm"
        ? "px-4 py-2 text-sm"
        : "px-7 py-3 text-base";
  const colors =
    variant === "white"
      ? "bg-white text-orange hover:bg-gray-bg focus-visible:outline-white"
      : "bg-orange text-white hover:bg-orange-hover focus-visible:outline-orange";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      className={`${base} ${sizes} ${colors} ${className}`}
    >
      {children}
    </a>
  );
}
