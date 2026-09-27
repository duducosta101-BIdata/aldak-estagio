import CTAButton from "@/components/CTAButton";
import { INSCRICOES } from "@/content/site";

interface CTAGroupProps {
  variant?: "orange" | "white";
  size?: "sm" | "md" | "lg";
  /** Layout: empilhado no mobile e lado a lado a partir de sm (padrão) ou sempre vertical. */
  direction?: "responsive" | "column";
  className?: string;
  buttonClassName?: string;
  onClick?: () => void;
}

/** Um botão "Inscreva-se" por vaga, todos apontando para as URLs de INSCRICOES. */
export default function CTAGroup({
  variant = "orange",
  size = "md",
  direction = "responsive",
  className = "",
  buttonClassName = "",
  onClick,
}: CTAGroupProps) {
  const layout =
    direction === "column"
      ? "flex flex-col gap-3"
      : "flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4";

  return (
    <div className={`${layout} ${className}`}>
      {INSCRICOES.map((vaga) => (
        <CTAButton
          key={vaga.id}
          href={vaga.url}
          variant={variant}
          size={size}
          onClick={onClick}
          className={buttonClassName}
        >
          {vaga.label}
        </CTAButton>
      ))}
    </div>
  );
}
