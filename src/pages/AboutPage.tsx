import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const founders = [
  {
    name: "Òscar Junyent",
    role: "Consultor AAI",
    bio: "Enginyer apassionat per la tecnologia i la innovació amb experiència liderant projectes digitals enfocats en aportar solucions pràctiques a empreses.",
    image: "/lovable-uploads/4def6625-87ed-4823-885f-baca8e9a7360.png",
    linkedin: "https://www.linkedin.com/in/ojunyent/",
  },
  {
    name: "Wojtek Szczupak",
    role: "Consultor AAI",
    bio: "Expert en ciència de dades amb àmplia experiència en analítica avançada, gestió de dades i aplicació d'insights orientats als resultats de negoci.",
    image: "/lovable-uploads/7ea4dcdf-22de-4659-8e1c-0a49704e01a8.png",
    linkedin: "https://www.linkedin.com/in/wojciech-szczupak/",
  },
];

const AboutPage = () => (
  <div className="bg-background min-h-screen flex flex-col items-center w-full px-4 py-12 animate-fade-in">
    <Helmet>
      <title>Qui som | Elink.cat – Experts en transformació digital</title>
      <meta name="description" content="Som una consultora catalana propera i experta, formada per CTOs amb 20 anys d'experiència. Ajudem empreses a créixer amb tecnologia." />
      <meta property="og:title" content="L’equip d’Elink.cat" />
      <meta property="og:description" content="El teu partner tecnològic de confiança." />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <div className="max-w-3xl w-full flex flex-col items-center text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-3">Qui som</h1>
      <p className="text-accent md:text-lg mb-5 text-center">
        Som <span className="font-semibold">elink.cat</span>, consultora tecnològica enfocada a la transformació digital de mitjanes empreses catalanes.
      </p>
    </div>

    <section className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-circular mb-10 p-8 md:p-12 flex flex-col gap-7">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">Missió i visió</h2>
        <p className="text-accent">
          Ser el partner tecnològic de confiança per fer créixer empreses amb tecnologia innovadora, útil, a mida i alineada amb els seus objectius reals
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">Valors</h2>
        <ul className="flex flex-col gap-2 md:gap-1 items-start md:items-center mx-auto md:flex-row md:justify-center">
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold mr-2 mb-2 md:mb-0">Innovació</li>
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold mr-2 mb-2 md:mb-0">Qualitat</li>
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold mr-2 mb-2 md:mb-0">Proximitat</li>
        </ul>
        <ul className="flex flex-col gap-2 md:gap-1 items-start md:items-center mx-auto md:flex-row md:justify-center mt-2">
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold mr-2 mb-2 md:mb-0">Impacte real</li>
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold">Innovació responsable</li>
        </ul>
      </div>
    </section>

    <section className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-circular mb-10 p-8 md:p-12 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-dark mb-6">Equip fundador</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        {founders.map((f) => (
          <div
            key={f.name}
            className="flex flex-col items-center text-center flex-1 max-w-xs md:max-w-sm"
          >
            <div className="mb-3">
              <img
                src={f.image}
                alt={`Foto de ${f.name}`}
                className="rounded-full w-28 h-28 object-cover bg-gray shadow-md mb-2"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-dark">{f.name}</h3>
              <p className="text-sm text-primary font-semibold">{f.role}</p>
              <p className="mt-2 text-accent text-base">{f.bio}</p>
              <div className="mt-4 flex justify-center">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label={`LinkedIn de ${f.name}`}
                >
                  <Linkedin size={28} className="text-accent hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full max-w-2xl text-center mt-6 mb-10 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">Vols treballar amb nosaltres?</h2>
      <Link
        to="/contacte"
        className="inline-block px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover-scale transition-all duration-200"
      >
        Contacta el nostre equip
      </Link>
    </section>

    <Footer t={{}} />
  </div>
);

export default AboutPage;
