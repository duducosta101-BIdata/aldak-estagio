import Icon from "@/components/Icon";
import { site } from "@/content/site";

export default function Beneficios() {
  const { beneficios } = site;
  return (
    <section id="beneficios" className="bg-light-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl leading-tight text-blue-dark md:text-5xl">{beneficios.h2}</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {beneficios.itens.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-blue-dark bg-white p-6 md:p-8"
            >
              <div className="flex items-center gap-4">
                <Icon
                  name={item.icon}
                  className="h-9 w-9 shrink-0 text-blue-dark md:h-10 md:w-10"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl text-blue-dark md:text-2xl">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-black md:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
