import { Briefcase, Workflow, BrainCog, MonitorSmartphone, GraduationCap, ChartPie } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    title: "Consultoria tecnològica",
    desc: "Anàlisi de processos i identificació d’oportunitats digitals.",
    icon: Briefcase,
  },
  {
    title: "Automatització de processos",
    desc: "Integració d’eines, RPA i millora operativa.",
    icon: Workflow,
  },
  {
    title: "Anàlisi de dades i visualització",
    desc: "Estructura, Analisis i Visualitzacio de dades·",
    icon: ChartPie,
  },
  {
    title: "Intel·ligència artificial aplicada",
    desc: "Models predictius, NLP, anàlisi de dades.",
    icon: BrainCog,
  },
  {
    title: "Desenvolupament d’eines digitals",
    desc: "Aplicacions web, intranets, integració d’APIs.",
    icon: MonitorSmartphone,
  },
  {
    title: "Formació i divulgació tecnològica",
    desc: "Tallers, acompanyament, capacitació per equips.",
    icon: GraduationCap,
  },
];

// Traduccions bàsiques pel footer perquè funcioni igual que a la home
const t = {};

const ServicesPage = () => (
  <div className="bg-background min-h-screen py-16 px-4 flex flex-col items-center w-full">
    <Helmet>
      <title>Serveis de consultoria tecnològica, IA i automatització | elinkcat</title>
      <meta name="description" content="Oferim serveis de consultoria, automatització, IA, desenvolupament d’eines digitals, anàlisi de dades i formació. Solucions tecnològiques per fer créixer la teva empresa." />
      <meta property="og:title" content="Serveis de consultoria tecnològica | elinkcat" />
      <meta property="og:description" content="Descobreix com t’ajudem a transformar el teu negoci amb tecnologia útil." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <div className="max-w-3xl text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">Serveis d’elinkcat</h1>
      <p className="text-accent md:text-lg">
        Impulsem la transformació digital de la teva empresa amb serveis clau per créixer i adaptar-se al futur tecnològic.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
      {SERVICES.map((srv, i) => (
        <div
          key={srv.title}
          className="flex flex-col md:flex-row items-start gap-5 rounded-2xl bg-white/90 shadow-circular border border-gray/40 p-7 md:p-8 animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
        >
          <div className="bg-primary flex items-center justify-center rounded-full w-16 h-16 shadow-md shrink-0">
            <srv.icon size={32} className="text-primary-foreground" />
          </div>
          <div className="w-full">
            <h2 className="text-xl font-bold text-dark text-center">{srv.title}</h2>
            <p className="text-accent text-base mt-1">{srv.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-16">
      <Link to="/contacte" className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover-scale transition-all duration-200">
        Demana informació
      </Link>
    </div>
    <Footer t={t} />
  </div>
);

export default ServicesPage;
