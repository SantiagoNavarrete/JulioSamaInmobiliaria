import { Clock, MapPin, Phone, Instagram, ShieldCheck, TrendingUp, Map } from 'lucide-react'
import { whatsappLink, mapsLink } from '../data/siteData'

export default function ContactSection() {
  return (
    <section id="contacto" className="scroll-reveal mt-14 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg animate-[fadeIn_0.8s_ease-in-out]">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-500">Contacto</h3>
          <h2 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">Tu próxima propiedad está a un mensaje</h2>
          <p className="mt-4 text-slate-600">Visítanos en Av. Sarmiento 215, San Rafael, Mendoza. Atención cálida y soluciones a medida.</p>
          <div className="mt-6 space-y-3 text-slate-700">
            <p className="flex items-center gap-2 text-sm"><MapPin className="h-5 w-5 text-orange-400" /> Av. Sarmiento 215, San Rafael, Mendoza</p>
            <p className="flex items-center gap-2 text-sm"><Phone className="h-5 w-5 text-orange-400" /> +54 9 2604 63-3885</p>
            <p className="flex items-center gap-2 text-sm"><Instagram className="h-5 w-5 text-orange-400" /> @samainmobiliaria_sr</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappLink} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-400" target="_blank" rel="noreferrer">
              <Phone className="h-4 w-4" /> Mensaje WhatsApp
            </a>
            <a href={mapsLink} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-500" target="_blank" rel="noreferrer">
              <Map className="h-4 w-4" /> Ver en Google Maps
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
          <h4 className="text-lg font-bold text-slate-900">Atención permanente</h4>
          <p className="mt-2 text-slate-600">Estamos listos para acompañarte en cada paso: selección, oferta, cierre y postventa. Tu confianza es nuestra prioridad.</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-400" /> Respuesta en menos de 24 horas</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-400" /> Trámites seguros y transparentes</li>
            <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-orange-400" /> Estrategias con enfoque de alta plusvalía</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
