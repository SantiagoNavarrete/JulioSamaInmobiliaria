import { CheckCircle, Star, Users } from 'lucide-react'
import { stats } from '../data/siteData'

const statsIconMap = {
  Star: Star,
  Users: Users,
  CheckCircle: CheckCircle,
}

export default function WhyUsSection() {
  return (
    <section id="por-que" className="scroll-reveal mt-14 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg animate-[fadeIn_0.8s_ease-in-out]">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-500">Por qué elegirnos</h3>
          <h2 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">Prestigio y confianza local en cada operación</h2>
          <p className="mt-4 text-slate-600">Con décadas de trayectoria en San Rafael, brindamos asesoramiento personalizado, procesos transparentes, y conocimiento profundo del mercado mendocino.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-orange-400" /> Atención cercana y asesoría 100% local</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-orange-400" /> Estrategias de valoración adaptadas a cada zona</li>
            <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 text-orange-400" /> Red de compradores y acceso privilegiado</li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = statsIconMap[item.iconName]
            return (
              <article key={item.label} className="rounded-2xl bg-slate-50 p-5 text-center shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300">
                <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500 animate-pulse">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
