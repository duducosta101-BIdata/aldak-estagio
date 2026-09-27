import Image from "next/image";
import { site } from "@/content/site";

export default function Depoimentos() {
  const { depoimentos } = site;
  return (
    <section id="depoimentos" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl leading-tight text-blue-dark md:text-5xl">
          {depoimentos.h2}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {depoimentos.itens.map((dep) => (
            <article
              key={dep.nome}
              className="rounded-2xl border border-blue-dark bg-white p-6 md:p-8"
            >
              {/* A foto já vem com moldura laranja sobre azul — sem borda extra. */}
              <Image
                src={dep.foto}
                alt={dep.nome}
                width={1024}
                height={1024}
                sizes="176px"
                className="h-40 w-40 rounded-2xl object-cover md:h-44 md:w-44"
              />
              <p className="mt-5 text-lg font-medium text-orange md:text-xl">{dep.nome}</p>
              <p className="text-sm text-black/60 md:text-base">{dep.cargo}</p>
              <p className="mt-4 text-sm leading-relaxed text-black/85 md:text-base">
                {dep.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
