import Logo from "@/components/Logo";
import { site } from "@/content/site";

export default function Footer() {
  const { footer } = site;
  return (
    <footer className="bg-navy py-12 text-white md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:px-6">
        <Logo variant="aldak-white" alt={footer.aldakLogoAlt} className="h-9 w-auto md:h-10" />
        <p className="text-sm font-medium md:text-base">{footer.texto}</p>
        <Logo
          variant="programa-white"
          alt={footer.programaLogoAlt}
          className="h-16 w-auto md:h-20"
        />
      </div>
    </footer>
  );
}
