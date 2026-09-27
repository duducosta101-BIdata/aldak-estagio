import { site } from "@/content/site";

export default function OEstagio() {
  const { oEstagio } = site;
  return (
    <section id="o-estagio" className="bg-light-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-base font-medium text-blue-dark md:text-lg">
          {oEstagio.tagline}
        </p>
        <h2 className="mt-6 text-center text-3xl leading-tight text-blue-dark md:text-4xl">
          {oEstagio.h2}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {oEstagio.cards.map((card) => (
            <article key={card.title} className="rounded-2xl bg-orange p-7 text-white md:p-8">
              <h3 className="text-lg md:text-xl">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed md:text-base">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
