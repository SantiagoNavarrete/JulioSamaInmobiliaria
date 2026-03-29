import { MapPin, Phone } from 'lucide-react'
import { featuredProperties, whatsappLink } from '../data/siteData'

export default function FeaturedPropertiesSection() {
  return (
    <section id="destacadas" className="scroll-reveal mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-lg animate-[fadeIn_0.8s_ease-in-out]">
      <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-orange-500">Propiedades Destacadas</h3>
      <h2 className="mt-2 text-center text-3xl font-bold text-slate-900 md:text-4xl">Seleccionadas para vos</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProperties.map((prop) => (
          <article key={prop.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="h-48 w-full overflow-hidden bg-slate-100">
              <img src={prop.img} alt={prop.title} className="h-full w-full object-cover transition duration-500 ease-out hover:scale-110" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-slate-900">{prop.title}</h4>
              <p className="mt-1 text-sm text-slate-700">{prop.location}</p>
              <p className="mt-2 text-base font-bold text-orange-500">{prop.price}</p>
              <p className="mt-1 text-sm text-slate-700">{prop.type}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                <Phone className="mr-2 h-4 w-4" /> Consultar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
