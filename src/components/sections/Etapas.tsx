import { site } from "@/content/site";

export default function Etapas() {
  const { etapas } = site;
  return (
    <section id="etapas" className="bg-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl leading-tight md:text-4xl">{etapas.h2}</h2>

        <ol className="relative mx-auto mt-12 max-w-md md:mt-16">
          {/* Linha conectora vertical */}
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-5 w-0.5 -translate-x-1/2 bg-orange"
          />
          {etapas.itens.map((etapa, i) => (
            <li key={etapa} className="relative flex items-center gap-5 py-4 md:py-5">
              <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange text-base font-semibold text-white">
                {i + 1}
              </span>
              <span className="text-lg font-medium md:text-xl">{etapa}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
