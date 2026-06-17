import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  HeartPulse,
  Home,
  MapPin,
  MessageCircle,
  Microscope,
  PhoneCall,
  Pill,
  ShieldCheck,
  Video,
} from 'lucide-react'
import heroImage from './assets/hero-obra-social.png'
import logoColor from './assets/flex-logo-color.png'
import logoWhite from './assets/flex-logo-white.png'

const whatsappNumber = '5491161955461'
const whatsappText = encodeURIComponent(
  'Hola Flex Salud, quiero recibir información sobre los planes.',
)
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

const benefits = [
  { label: '18 consultorios propios', icon: Building2 },
  { label: 'No abona bonos ni copagos', icon: CircleDollarSign },
  { label: 'Descuentos en medicamentos', icon: Pill },
  { label: 'Médicos a domicilio', icon: Home },
  { label: 'Médico por videollamada', icon: Video },
  { label: 'Servicio de laboratorio', icon: Microscope },
]

const coverages = [
  'Médico clínico',
  'Pediatría',
  'Diagnóstico por imagen',
  'Salud mental',
  'Cobertura ambulatoria',
  'Laboratorios',
  'Nutrición',
  'Traumatología',
  'Cardiología',
  'Ginecología',
  'Ópticas',
  'Neonatología',
  'Oftalmología',
  'Obstetricia',
  'Dermatología',
  'Fonoaudiología',
  'Cirugía estética',
  'Kinesiología',
]

const zones = [
  {
    name: 'Zona Sur',
    places: ['Avellaneda', 'Lomas de Zamora', 'Monte Grande', 'Quilmes', 'Lanús'],
  },
  {
    name: 'Zona Oeste',
    places: ['Gral. Rodríguez', 'Moreno', 'Morón', 'Merlo', 'San Justo'],
  },
  {
    name: 'Zona Norte',
    places: ['Escobar', 'Zárate', 'Pilar', 'San Fernando', 'Garín', 'San Martín'],
  },
  {
    name: 'CABA',
    places: ['Villa Soldati', 'Liniers'],
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="fixed inset-x-0 top-0 z-40 border-b-4 border-[#83bd73] bg-white/96 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Flex Salud">
            <img className="h-10 w-auto sm:h-12" src={logoColor} alt="Flex Salud" />
          </a>
          <div className="hidden items-center gap-8 text-base font-bold text-slate-500 md:flex">
            <a href="#plan" className="transition hover:text-[#04798b]">
              Plan Gamma
            </a>
            <a href="#consultorios" className="transition hover:text-[#04798b]">
              Consultorios
            </a>
            <a href="#contacto" className="transition hover:text-[#04798b]">
              Contacto
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#477c91] px-3 text-sm font-bold text-white shadow-lg shadow-slate-300/60 transition hover:bg-[#3d7085] sm:h-11 sm:px-5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden bg-[#04798b] pt-16 text-white sm:min-h-[820px] sm:pt-24 lg:min-h-[760px]">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,61,78,.94)_0%,rgba(4,121,139,.82)_39%,rgba(4,121,139,.32)_68%,rgba(3,57,91,.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(131,189,115,.24),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-20 pt-10 sm:gap-10 sm:px-6 sm:pb-24 sm:pt-14 lg:grid-cols-[.94fr_1.06fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex min-h-[610px] flex-col justify-center sm:min-h-[620px] lg:min-h-[560px]">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold leading-5 text-white backdrop-blur sm:mb-7 sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-[#9ccc85]" />
              Planes médicos simples, cercanos y sin vueltas
            </div>
            <img className="mb-7 h-auto w-64 sm:w-80" src={logoWhite} alt="Flex Salud" />
            <h1 className="max-w-3xl text-4xl font-black leading-[.98] tracking-normal sm:text-6xl lg:text-7xl">
              Tu cobertura médica, simple y cercana.
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white/86 sm:mt-6 sm:text-xl">
              Cobertura médica con consultorios propios, atención a domicilio,
              videollamada y laboratorio para que resolver tu salud sea más fácil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#83bd73] px-6 text-base font-black text-white shadow-xl shadow-emerald-950/25 transition hover:bg-[#74ad65] sm:h-14 sm:px-7"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar por WhatsApp
              </a>
              <a
                href="#plan"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-base font-bold text-white transition hover:bg-white/10 sm:h-14 sm:px-7"
              >
                Ver beneficios
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />

          <div className="absolute bottom-8 left-4 right-4 max-w-[520px] sm:left-6 lg:left-auto lg:right-8 lg:bottom-14">
            <div className="rounded-3xl border border-white/18 bg-white/94 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#83bd73] text-white sm:h-14 sm:w-14">
                  <HeartPulse className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#04798b] sm:text-sm">
                    Plan Gamma
                  </p>
                  <p className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                    Atención integral
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <p className="rounded-2xl bg-[#eef7f5] px-4 py-3 text-sm font-bold text-slate-700">
                  Sin bonos ni copagos
                </p>
                <p className="rounded-2xl bg-[#eef7f5] px-4 py-3 text-sm font-bold text-slate-700">
                  Videoconsulta y domicilio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="relative bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <img className="h-auto w-56 sm:w-72" src={logoColor} alt="Flex Salud" />
              <p className="mt-8 text-sm font-black uppercase tracking-[.22em] text-[#04798b]">
                Beneficios destacados
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                Un plan pensado para resolver más rápido.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                La propuesta combina red propia, prestaciones de uso frecuente y
                canales de atención pensados para el día a día.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="group flex min-h-24 items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#83bd73]/60 hover:bg-white hover:shadow-xl hover:shadow-slate-200 sm:min-h-28 sm:p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#83bd73] text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-base font-black leading-6 text-slate-900 sm:text-lg">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="coberturas" className="bg-[#eef7f5] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[.22em] text-[#04798b]">
              Coberturas
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
              Especialidades para acompanarte en cada etapa.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coverages.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-bold text-slate-700 sm:text-lg">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#83bd73] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-200 sm:p-8">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#04798b] text-white">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[.18em] text-[#83bd73]">
                    Cobertura amplia
                  </p>
                  <p className="mt-1 text-3xl font-black text-slate-950">18+ especialidades</p>
                </div>
              </div>
              <div className="mt-7 grid gap-4">
                {['Consultas médicas', 'Estudios y diagnóstico', 'Salud familiar', 'Atención ambulatoria'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4">
                    <span className="font-bold text-slate-700">{item}</span>
                    <Check className="h-5 w-5 text-[#83bd73]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="consultorios" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-[2rem] bg-[#07395b] p-6 text-white shadow-2xl shadow-slate-200 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#83bd73]">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[.18em] text-[#9ccc85]">
                      Red propia
                    </p>
                    <p className="mt-1 text-3xl font-black">18 consultorios</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Sur', 'Oeste', 'Norte', 'CABA'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                      <p className="text-xs font-bold uppercase tracking-[.16em] text-white/60">
                        Zona
                      </p>
                      <p className="mt-2 text-xl font-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-black uppercase tracking-[.22em] text-[#04798b]">
                Red de atención
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                Consultorios distribuidos por las principales zonas.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {zones.map((zone) => (
                  <article key={zone.name} className="rounded-3xl border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#04798b] text-white">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl font-black text-slate-950">{zone.name}</h3>
                    </div>
                    <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
                      {zone.places.join(' · ')}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#07395b] py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-9 w-9 text-[#83bd73]" />
              <p className="text-sm font-black uppercase tracking-[.22em] text-[#9ccc85]">
                Asesoramiento directo
              </p>
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Pedí información del plan y recibí una respuesta personalizada.
            </h2>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#83bd73] px-7 text-base font-black text-white shadow-xl shadow-slate-950/20 transition hover:bg-[#74ad65] sm:h-16 sm:px-8 sm:text-lg"
          >
            <PhoneCall className="h-6 w-6" />
            Hablar ahora
          </a>
        </div>
      </section>

      <footer className="border-t-4 border-[#83bd73] bg-[#477c91] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <img className="h-auto w-40" src={logoWhite} alt="Flex Salud" />
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white/86">
            <a href="#plan" className="transition hover:text-white">
              Plan Gamma
            </a>
            <a href="#coberturas" className="transition hover:text-white">
              Coberturas
            </a>
            <a href="#consultorios" className="transition hover:text-white">
              Consultorios
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </nav>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/16 pt-5">
          <p className="text-sm font-medium text-white/70">
            Flex Salud. La información puede ajustarse según cartilla vigente.
          </p>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/30 transition hover:scale-105 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </main>
  )
}

export default App
