import { GraduationCap, Users, Bot, Send, FileText, Video, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TALLERS = [
  {
    titol: "IA per a equips comercials",
    desc: "Com utilitzar Intel·ligència Artificial per comunicar i vendre millor.",
    icona: <Bot size={28} className="text-primary" />,
  },
  {
    titol: "Automatització amb eines 'no code'",
    desc: "Introducció pràctica a l'automatització de processos sense saber programar.",
    icona: <Send size={28} className="text-primary" />,
  },
  {
    titol: "Tallers personalitzats",
    desc: "Sessions a mida segons les necessitats, ritme i reptes del vostre equip.",
    icona: <Users size={28} className="text-primary" />,
  },
];

// Reordered: blog, newsletter (Píndola de Tecnologia), video
const RECURSOS = [
  {
    nom: "Guia pràctica: Primer contacte amb ChatGPT",
    tipus: "Blog",
    icona: <FileText size={22} className="text-accent" />,
    href: "#",
    placeholder: false,
    isBlog: true, // Custom key to identify blog item
  },
  {
    nom: "Cada dimarts enviem la nostre newsletter. Subscriute aquí",
    tipus: "Píndola de TecnologIA",
    icona: <Mail size={22} className="text-accent" />,
    href: "https://oscarjunyent.substack.com/",
    placeholder: false,
    newsletter: true, // Custom key to identify newsletter item
  },
  {
    titol: "Masterclass: Automatització per a principiants",
    tipus: "Vídeo",
    icona: <Video size={22} className="text-accent" />,
    href: "#",
    placeholder: true,
  },
];

// Traduccions bàsiques pel Footer perquè funcioni igual que a la home
const t = {};
const FormacioPage = () => (
  <div className="bg-background min-h-screen py-14 px-4 flex flex-col items-center w-full animate-fade-in">
    <Helmet>
      <title>Formació en IA i automatització per equips | Elink.cat</title>
      <meta
        name="description"
        content="Tallers pràctics i divulgació per equips que volen entendre i aplicar la tecnologia. Descobreix les nostres formacions i recursos."
      />
      <meta property="og:title" content="Formació i recursos | Elink.cat" />
      <meta
        property="og:description"
        content="Capacitem equips per entendre i aplicar la tecnologia."
      />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <section className="max-w-3xl text-center mb-10 animate-fade-in">
      <h1 className="flex justify-center items-center gap-4 text-4xl md:text-5xl font-extrabold text-dark mb-3">
        <GraduationCap className="text-primary" size={38} /> Formació i divulgació
      </h1>
      <p className="text-lg md:text-2xl text-accent mt-3 mb-3 font-medium">
        Ajudem els equips a entendre i aprofitar la IA i l’automatització.
      </p>
      <p className="text-accent md:text-base mb-1">
        Facilitem coneixement pràctic i rigorós per impulsar la transformació digital, des de la comprensió bàsica fins a l’aplicació al vostre sector.
      </p>
    </section>

    {/* Tallers i sessions */}
    <section className="container max-w-4xl w-full bg-white rounded-2xl shadow-circular p-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark text-center">Tallers destacats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-4">
        {TALLERS.map((t, i) => (
          <div
            key={t.titol}
            className="rounded-xl border border-gray/30 shadow-circular bg-gray/10 p-6 flex flex-col items-center text-center animate-fade-in"
            style={{
              animationDelay: `${i * 70}ms`,
            } as React.CSSProperties}
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-black mb-3 shadow-md">
              {t.icona}
            </span>
            <h3 className="text-lg font-semibold text-dark mb-1">{t.titol}</h3>
            <p className="text-accent mb-0">{t.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-md">
          Tallers in-company i també per a col·lectius/associacions. Ens adaptem totalment!
        </span>
      </div>
    </section>

    {/* Recursos */}
    <section className="container max-w-4xl w-full bg-white rounded-2xl shadow-circular p-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-7 text-dark text-center">Recursos i continguts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {RECURSOS.map((r, i) => (
          <div
            key={r.nom || r.titol}
            className="rounded-xl border border-gray/20 shadow bg-gray/5 px-5 py-7 flex flex-col items-center text-center animate-fade-in"
            style={{
              animationDelay: `${i * 70}ms`,
            } as React.CSSProperties}
          >
            <span className="mb-2">{r.icona}</span>
            <span className="font-semibold text-base text-accent mb-1">{r.tipus}</span>
            {r.isBlog ? (
              <span className="text-dark/90 font-medium mt-1">
                Podeu llegir articles d'opinio sonre IA al nostre{" "}
                <a
                  href="https://blog.elink.cat"
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blog
                </a>
              </span>
            ) : r.placeholder ? (
              <span className="text-gray-400 italic mb-1">Próximament</span>
            ) : r.newsletter ? (
              <span className="text-dark/90 font-medium mt-1">
                Cada dimarts enviem la nostre newsletter. Subscriute{" "}
                <a
                  href="https://oscarjunyent.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  aquí
                </a>
              </span>
            ) : (
              <span className="text-dark/90 font-medium mt-1">{r.nom}</span>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-medium text-md">
          Incorporem regularment continguts actualitzats i de qualitat.
        </span>
      </div>
    </section>

    {/* CTA final */}
    <section className="container max-w-2xl px-0 w-full flex flex-col items-center mb-8 animate-fade-in">
      <div className="bg-primary rounded-2xl shadow-circular p-8 w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Vols una sessió adaptada al teu equip?
        </h2>
        <p className="text-primary-foreground mb-6">
          Explora com la IA i l’automatització poden marcar la diferència d’una manera accessible i pràctica.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link
            to="/contacte"
            className="px-8 py-3 rounded-full bg-white text-primary font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
          >
            Contacta amb nosaltres
          </Link>
          <a
            href="https://calendly.com/oscar-junyent-elinkcat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-primary-foreground text-primary font-semibold text-lg shadow-circular border-2 border-white hover:scale-105 transition-transform duration-200"
          >
            Reserva una trobada
          </a>
        </div>
      </div>
    </section>
    {/* Removed: Torna a l'inici link */}
    <Footer t={t} />
  </div>
);
export default FormacioPage;
