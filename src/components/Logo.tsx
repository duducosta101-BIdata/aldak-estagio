import Image from "next/image";

type LogoVariant = "aldak-white" | "aldak-blue" | "programa-white" | "programa-blue";

interface LogoProps {
  variant: LogoVariant;
  alt: string;
  className?: string;
  priority?: boolean;
}

// Dimensões reais dos PNGs oficiais em public/brand (usadas como intrínsecas).
const ALDAK = { w: 2813, h: 625 };
const PROGRAMA = { w: 2844, h: 1251 };

export default function Logo({ variant, alt, className = "", priority }: LogoProps) {
  if (variant === "aldak-blue") {
    // Versão azul do logo ALDAK: máscara CSS sobre o PNG branco oficial (não recriado).
    return (
      <span
        role="img"
        aria-label={alt}
        className={`logo-mask ${className}`}
        style={{ aspectRatio: `${ALDAK.w} / ${ALDAK.h}` }}
      />
    );
  }

  const src =
    variant === "aldak-white"
      ? "/brand/aldak-horizontal-white.png"
      : variant === "programa-white"
        ? "/brand/programa-estagio-2027-white.png"
        : "/brand/programa-estagio-2027-blue.png";

  const dims = variant === "aldak-white" ? ALDAK : PROGRAMA;

  return (
    <Image
      src={src}
      alt={alt}
      width={dims.w}
      height={dims.h}
      priority={priority}
      className={className}
    />
  );
}
