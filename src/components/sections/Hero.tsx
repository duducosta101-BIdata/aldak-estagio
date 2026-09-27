import Image from "next/image";
import CTAButton from "@/components/CTAButton";
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
        <div className="mt-8 flex justify-center md:mt-10">
          <CTAButton size="lg">{hero.cta}</CTAButton>
        </div>
      </div>
    </section>
  );
}
