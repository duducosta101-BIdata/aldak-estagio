import Icon from "@/components/Icon";
import { site } from "@/content/site";

export default function Valores() {
  const { valores } = site;
  return (
    <section id="valores" className="bg-light-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl leading-tight text-blue-dark md:text-5xl">
          {valores.h2Linhas.map((linha, i) => (
            <span key={linha} className={i === 0 ? "" : "block"}>
              {linha}
            </span>
          ))}
        </h2>

        <ul className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
          {valores.itens.map((item) => (
            <li key={item.title} className="flex items-start gap-5">
              <Icon
                name={item.icon}
                className="h-12 w-12 shrink-0 text-blue-dark md:h-14 md:w-14"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-xl text-blue-dark md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
