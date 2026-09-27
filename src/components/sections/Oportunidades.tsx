import { site } from "@/content/site";

function Bullets({ itens }: { itens: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {itens.map((item) => (
        <li key={item} className="flex gap-4 text-base text-blue-dark md:text-lg">
          <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-dark" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Oportunidades() {
  const { oportunidades, requisitos } = site;
  return (
    <section id="oportunidades" className="bg-light-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl leading-tight text-blue-dark md:text-5xl">
          {oportunidades.h2Linhas.map((linha, i) => (
            <span key={linha} className={i === 0 ? "" : "block"}>
              {linha}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {oportunidades.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-blue-dark bg-white p-6 md:p-7"
            >
              <h3 className="text-xl text-blue-dark md:text-2xl">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black md:text-base">{card.text}</p>
            </article>
          ))}
        </div>

        {/* Bloco Requisitos: fundo --gray-bg. A borda --gray-light só existe para distinguir o bloco
            enquanto a seção usa o fallback liso --gray-bg (textura clara pendente). */}
        <div className="mt-8 rounded-2xl border border-gray-light bg-gray-bg p-6 md:mt-10 md:p-10">
          <h3 className="text-2xl text-blue-dark md:text-3xl">{requisitos.h3}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-10">
            <Bullets itens={requisitos.colunaEsquerda} />
            <Bullets itens={requisitos.colunaDireita} />
          </div>
        </div>
      </div>
    </section>
  );
}
