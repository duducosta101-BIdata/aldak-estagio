import CTAGroup from "@/components/CTAGroup";
import { site } from "@/content/site";

export default function CTAFinal() {
  const { ctaFinal } = site;
  return (
    <section id="inscreva-se" className="bg-orange py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center md:px-6">
        <h2 className="text-3xl leading-tight md:text-5xl">{ctaFinal.h2}</h2>
        <CTAGroup variant="white" size="lg" className="w-full" />
      </div>
    </section>
  );
}
