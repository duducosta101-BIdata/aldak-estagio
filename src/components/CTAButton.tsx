import { INSCRICAO_URL } from "@/content/site";

interface CTAButtonProps {
  children: React.ReactNode;
  /** "orange": fundo laranja + texto branco (padrão). "white": fundo branco + texto laranja (sobre fundo laranja). */
  variant?: "orange" | "white";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  children,
  variant = "orange",
  size = "md",
  className = "",
  onClick,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes = size === "lg" ? "px-10 py-4 text-lg" : "px-7 py-3 text-base";
  const colors =
    variant === "white"
      ? "bg-white text-orange hover:bg-gray-bg focus-visible:outline-white"
      : "bg-orange text-white hover:bg-orange-hover focus-visible:outline-orange";

  return (
    <a
      href={INSCRICAO_URL}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      className={`${base} ${sizes} ${colors} ${className}`}
    >
      {children}
    </a>
  );
}
