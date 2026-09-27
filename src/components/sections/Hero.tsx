import Image from "next/image";
import CTAGroup from "@/components/CTAGroup";
import { site } from "@/content/site";

export default function Hero() {
  const { hero } = site;
  return (
    <section id="hero" className="bg-blue-paper py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Image
          src={hero.image}
          alt={hero.alt}
          width={1366}
          height={370}
          priority
          sizes="(min-width: 1152px) 1104px, 100vw"
          className="h-auto w-full rounded-2xl"
        />
        <CTAGroup size="lg" className="mt-8 md:mt-10" />
      </div>
    </section>
  );
}
