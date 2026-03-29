import { Building, Home, MapPin, Clock, HeartHandshake, Trophy } from 'lucide-react'
import { services } from '../data/siteData'

const iconMap = {
  Buildings: Building,
  Home: Home,
  MapPin: MapPin,
  Clock: Clock,
  HeartHandshake: HeartHandshake,
  Trophy: Trophy,
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="scroll-reveal mt-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-lg">
      <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-orange-500">Servicios</h3>
      <h2 className="mt-2 text-center text-3xl font-bold text-slate-900 md:text-4xl">Potenciamos tu inversión inmobiliaria</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600">Soluciones integrales para ventas, alquileres, lotes y administración con foco en confianza y resultados.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => {
          const Icon = iconMap[item.iconName]
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-lg transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-orange-400 hover:shadow-2xl"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 animate-pulse">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
