export const whatsappMessage = encodeURIComponent('Hola Julio Sama, necesito información sobre propiedad.')
export const whatsappPhone = '5492604633885' // +54 9 2604 63-3885

const isMobileDevice = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export const whatsappLink = isMobileDevice
  ? `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`
  : `https://web.whatsapp.com/send?phone=${whatsappPhone}&text=${whatsappMessage}`

export const whatsappFallbackLink = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${whatsappMessage}`
export const mapsLink = 'https://www.google.com/maps/place/Julio+Sama+Inmobiliaria+San+Rafael/@-34.6251379,-68.3477364,15z/data=!3m1!4b1!4m6!3m5!1s0x9679098e9e5feba1:0xd4a702de2bc9ea3b!8m2!3d-34.6251383!4d-68.3374367!16s%2Fg%2F11h_kdq8dd?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D'

export const services = [
  { iconName: 'Buildings', title: 'Ventas de propiedades', desc: 'Hogares y comerciales listos para ocupar.' },
  { iconName: 'Home', title: 'Alquileres', desc: 'Contratos flexibles con rendimiento seguro.' },
  { iconName: 'MapPin', title: 'Lotes', desc: 'Terrenos premium en zonas estratégicas.' },
  { iconName: 'Clock', title: 'Tasaciones en 24 hs', desc: 'Valor local real en tiempo récord.' },
  { iconName: 'HeartHandshake', title: 'Administración inmuebles', desc: 'Gestión integral y transparente.' },
  { iconName: 'Trophy', title: 'Asesoramiento personalizado', desc: 'Estrategias pensadas para vos.' },
]

export const stats = [
  { iconName: 'Star', value: '18+', label: 'Años de experiencia' },
  { iconName: 'Users', value: '1.200+', label: 'Clientes satisfechos' },
  { iconName: 'CheckCircle', value: '520+', label: 'Propiedades vendidas' },
]

export const featuredProperties = [
  { title: 'Casa en Barrio Jardín', location: 'Av. Mitre 455, San Rafael', price: '$38.000.000', type: '4 dorm | 3 baños | 350 m²', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70' },
  { title: 'Departamento centro', location: 'Calle Roca 1024, San Rafael', price: '$28.000.000', type: '2 dorm | 2 baños | 120 m²', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70' },
  { title: 'Lote en norte', location: 'Las Paredes, San Rafael', price: '$15.000.000', type: '800 m²', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1100&q=80' },
]
