import { Home, Phone } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3 text-slate-900">
          <Home className="h-8 w-8 text-orange-500" />
          <div>
            <a href="#Hero"><h1 className="text-lg font-bold tracking-wide">JULIO SAMA</h1></a>
            <p className="text-xs uppercase tracking-wider text-slate-600">Servicios Inmobiliarios</p>
          </div>
        </div>
        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          <a href="#servicios" className="hover:text-orange-500">Servicios</a>
          <a href="#por-que" className="hover:text-orange-500">Por qué elegirnos</a>
          <a href="#destacadas" className="hover:text-orange-500">Propiedades</a>
          <a href="#contacto" className="hover:text-orange-500">Contacto</a>
        </nav>
        <a href={whatsappLink} className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 md:w-auto md:text-base" target="_blank" rel="noreferrer">
          <Phone className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </header>
  )
}
