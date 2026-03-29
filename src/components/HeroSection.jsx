import { Map, Phone } from 'lucide-react'
import { whatsappLink, mapsLink } from '../data/siteData'

export default function HeroSection() {
  return (
    <section id='Hero' className="scroll-reveal relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 px-4 py-24 sm:px-6 sm:py-28 shadow-[0_15px_40px_rgba(15,23,42,0.08)] animate-[fadeIn_0.8s_ease-in-out]">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70"
          alt="San Rafael"
          className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-slate-950/40" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-6 text-center text-white">
        <p className="text-sm uppercase tracking-wide text-orange-300">San Rafael, Mendoza</p>
        <h2 className="text-3xl font-black leading-tight md:text-5xl drop-shadow-xl">Tu hogar ideal en San Rafael, Mendoza</h2>
        <p className="mx-auto max-w-2xl text-base text-slate-100 sm:text-lg">Tasaciones · Administraciones · Ventas · Alquileres. Excelencia local con servicio premium 24/7.</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-orange-400"
          >
            <Phone className="h-5 w-5" /> Consultanos ahora
          </a>
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-slate-100"
          >
            <Map className="h-5 w-5 text-slate-900" /> Ver ubicación
          </a>
        </div>
      </div>
    </section>
  )
}
