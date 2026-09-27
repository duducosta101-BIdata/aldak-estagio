import { site } from "@/content/site";

export default function QuemSomos() {
  const { quemSomos } = site;
  return (
    <section id="quem-somos" className="bg-blue-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl leading-tight md:text-5xl">
          {quemSomos.h2Linhas.map((linha, i) => (
            <span key={linha} className={i === 0 ? "" : "block"}>
              {linha}
            </span>
          ))}
        </h2>

        <p className="mt-8 max-w-2xl text-lg md:text-2xl">{quemSomos.paragrafo}</p>

        <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {quemSomos.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-white bg-white px-4 py-3 text-center text-sm font-medium text-navy md:text-base"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
