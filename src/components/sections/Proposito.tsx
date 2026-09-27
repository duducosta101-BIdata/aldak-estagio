import Image from "next/image";
import { site } from "@/content/site";

export default function Proposito() {
  const { proposito } = site;
  return (
    <section id="proposito" className="bg-blue-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl">{proposito.h1}</h1>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
          {proposito.fotos.map((foto) => (
            <div
              key={foto.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-white"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 768px) 220px, 45vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg md:mt-14 md:text-2xl">{proposito.texto}</p>
      </div>
    </section>
  );
}
