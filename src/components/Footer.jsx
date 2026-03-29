import { Map, Phone, ExternalLink } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 text-slate-700">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-slate-900">JULIO SAMA – Servicios Inmobiliarios</p>
          <p className="text-xs mt-1">Av. Sarmiento 215, San Rafael, Mendoza </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm md:justify-end">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700 hover:bg-emerald-200"><Phone className="h-4 w-4" /> WhatsApp</a>
          <a href="https://www.google.com/maps/place/Julio+Sama+Inmobiliaria+San+Rafael" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1.5 text-sky-700 hover:bg-sky-200"><Map className="h-4 w-4" /> Google Maps</a>
          <a href="https://www.instagram.com/samainmobiliaria_sr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-pink-100 px-3 py-1.5 text-pink-700 hover:bg-pink-200"><ExternalLink className="h-4 w-4" /> @samainmobiliaria_sr</a>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Julio Sama Inmobiliaria. Todos los derechos reservados.</div>
    </footer>
  )
}
