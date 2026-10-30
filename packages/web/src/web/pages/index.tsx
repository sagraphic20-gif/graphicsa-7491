import { useState, type FormEvent } from "react";
import { Lightbulb, Scale, Megaphone, Users, Phone, Mail, Facebook, MapPin, MessageCircle } from "lucide-react";

const contactIcon =
  "flex h-6 w-6 shrink-0 items-center justify-center text-black";

const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#holding", label: "Holding" },
  { href: "#parcours", label: "Parcours" },
  { href: "#engagements", label: "Engagements" },
  { href: "#contact", label: "Contact" },
];

const FILIALES = [
  { nom: "IIGNA Hot-dogs", img: "hotdogs", slogan: "La restauration mobile qui fait bouger la ville", desc: "Restauration rapide mobile, chariots, menus accessibles, modernisation de la street food à Bangui." },
  { nom: "IIGNA Blanchisserie", img: "blanchisserie", slogan: "Le soin du linge, le confort en plus", desc: "Lavage professionnel au kilo, séchage, traitement du linge avec service de collecte et livraison." },
  { nom: "IIGNA Santé", img: "sante", slogan: "Des infrastructures de santé au service de tous", desc: "Développement d'infrastructures et de services de santé accessibles et modernes." },
  { nom: "IIGNA School", img: "school", slogan: "Former aujourd'hui les talents de demain", desc: "Accès à l'éducation, compétences numériques, équipement informatique et accompagnement vers l'emploi." },
  { nom: "IIGNA Immobilier", img: "immobilier", slogan: "Construire des espaces de vie et d'investissement", desc: "Projets immobiliers, logements, espaces commerciaux et infrastructures durables." },
  { nom: "IIGNA Technologie", img: "technologie", slogan: "Le numérique au service de la performance", desc: "Solutions IT sur mesure, sites web, plateformes, automatisation." },
  { nom: "IIGNA AgroTech", img: "agrotech", slogan: "Agriculture, innovation et transformation agro-industrielle", desc: "Transformation de fruits en jus, compost organique, économie circulaire." },
  { nom: "Mbúki", img: "mbuki", slogan: "Connecter les entreprises, révéler les opportunités", desc: "Plateforme numérique et annuaire géolocalisé pour l'écosystème entrepreneurial." },
  { nom: "Go Jump Invest", img: "go-jump-invest", slogan: "Les projets d'aujourd'hui, les réussites de demain", desc: "Plateforme de financement participatif (crowdfunding) pour projets innovants." },
];

const PARCOURS = [
  { lieu: "Bangui, RCA", poste: "Consultant en communication & Administrateur web", structure: "PAM (Programme Alimentaire Mondial)" },
  { lieu: "Cameroun", poste: "Responsable graphique & Administrateur web des comptes professionnels", structure: "NESTLÉ Cameroun" },
  { lieu: "Cameroun", poste: "Responsable graphique", structure: "GRAPHIC TECH" },
  { lieu: "Cameroun", poste: "Infographe / Web designer", structure: "INFINITY & CO." },
  { lieu: "Côte d'Ivoire", poste: "Responsable graphique", structure: "CRÉOLE" },
];

const EXPERTISES = [
  { icon: Lightbulb, titre: "Entrepreneuriat & Stratégie", texte: "Montage et développement de projets à faible investissement initial, adaptés au contexte centrafricain." },
  { icon: Scale, titre: "Ingénierie Juridique & Administrative", texte: "Statuts, règlements intérieurs, pactes d'associés, formalités GUFE et CCIMA." },
  { icon: Megaphone, titre: "Communication & Marketing Digital", texte: "Certifié Google & Adobe en communication, marketing digital et art graphique." },
  { icon: Users, titre: "Gestion & Mentorat", texte: "Fiscalité, suivi légal pour PME, PMI, startups, SARL, SURL, SAS, SA, ONG et associations." },
];

const ENGAGEMENTS = [
  { titre: "Président de l'ACDP", texte: "Association Coup de Pouce, Bangui." },
  { titre: "Ambassadeur de la paix", texte: "UNESCO, Cameroun." },
  { titre: "Conseiller par intérim", texte: "Fondation CŒUR SACRÉ DE JÉSUS, Bangui." },
  { titre: "Actions à impact social", texte: "Soupe populaire, Gala des albinos." },
];

const PHONE = "00 236 7289 1314";
const PHONE_TEL = "+23672891314";
const WHATSAPP = "00 236 70 64 73 04";
const WHATSAPP_URL = "https://wa.me/23670647304";
const EMAIL = "iignacapital@gmail.com";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61583772067917";

function SectionTitle({ kicker, title, light = false }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[#B8925A]">{kicker}</p>
      <h2 className={`font-display mt-3 text-4xl font-medium leading-tight md:text-5xl ${light ? "text-white" : "text-[#0B1424]"}`}>
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-[#B8925A]" />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1424]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#accueil" className="flex items-center">
          <img src="/images/logo-iigna-custom.png" alt="IIGNA Capital" className="h-8 w-auto" />
        </a>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="font-body text-sm text-white/75 transition hover:text-[#D9B982]">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-[#0B1424] px-6 py-6 md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-body text-white/85">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#0B1424] pt-28 text-white md:min-h-screen">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#D9B982 1px, transparent 1px), linear-gradient(90deg, #D9B982 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-[#B8925A]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:pb-28 md:pt-16">
        <div className="md:col-span-7">
          <p className="font-body text-xs font-medium uppercase tracking-[0.15em] text-[#D9B982]">Holding d'investissement · Bangui</p>
          <h1 className="font-display mt-5 text-5xl font-medium leading-[1.05] md:text-7xl">MAMELENZIA<br /><span className="text-[#D9B982]">Sydney Christ</span></h1>
          <p className="font-body mt-6 text-lg font-light text-white/85 md:text-xl">
            Fondateur &amp; PDG d'IIGNA Capital | Entrepreneur aguerri &amp; stratège de projets
          </p>
          <p className="font-body mt-6 max-w-xl leading-relaxed text-white/65">
            "16 ans d'expérience sur le terrain, bâtisseur de solutions à fort impact et architecte de l'écosystème entrepreneurial en République Centrafricaine."
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#holding" className="font-body rounded-full bg-[#B8925A] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#D9B982] hover:text-[#0B1424]">
              Découvrir la holding
            </a>
            <a href="#contact" className="font-body rounded-full border border-[#D9B982]/60 px-7 py-3.5 text-sm font-medium text-[#D9B982] transition hover:bg-[#D9B982]/10">
              Me contacter
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 border border-[#D9B982]/30" />
            <img src="/images/portrait.png" alt="MAMELENZIA Sydney Christ, fondateur et PDG d'IIGNA Capital" className="relative aspect-[3/4] w-full object-cover object-top grayscale-[15%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverBanner() {
  return (
    <section className="bg-[#0B1424] pb-24 pt-28 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <img
          src="/images/couverture.jpg"
          alt="IIGNA Capital, présentation de l'entreprise"
          className="aspect-video w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Plus de 16 ans d'expérience, fondateur de plus de 4 entreprises, ayant traversé les réalités de la création d'entreprise et de la levée de fonds.",
    "Spécialité : le montage de projets à faible investissement initial, adaptés aux conditions socio-économiques de la RCA, avec un fort potentiel de rentabilité.",
    "Ingénierie juridique, administrative et fiscale : statuts, règlements intérieurs, pactes d'associés, formalités GUFE et CCIMA, gestion fiscale et suivi légal pour PME, PMI, startups, SARL, SURL, SAS, SA, ONG et associations.",
  ];
  return (
    <section id="apropos" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="Profil" title="À propos" />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul className="space-y-6">
              {points.map((p) => (
                <li key={p} className="font-body flex gap-4 leading-relaxed text-[#1E2329]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#B8925A]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-5">
            <div className="bg-[#0B1424] p-10 text-white">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-[#D9B982]">Vision</p>
              <p className="font-display mt-4 text-2xl leading-snug">
                La création prochaine d'un incubateur pour accompagner la jeunesse et les futurs entrepreneurs.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Holding() {
  return (
    <section id="holding" className="bg-[#0B1424] py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="IIGNA Capital" title="Portefeuille de projets" light />
        <p className="font-body -mt-6 mb-14 max-w-2xl text-white/65">Neuf filiales stratégiques en phase de lancement.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FILIALES.map((f) => (
            <article key={f.nom} className="group flex flex-col overflow-hidden rounded-3xl bg-[#13233D] transition hover:bg-[#1A2E4D]">
              <img src={`/images/projets/${f.img}.png`} alt={f.nom} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <div className="flex flex-1 flex-col p-8">
              <div className="h-px w-10 bg-[#B8925A] transition-all group-hover:w-20" />
              <h3 className="font-display mt-6 text-2xl font-medium text-[#D9B982]">{f.nom}</h3>
              <p className="font-body mt-2 text-sm italic text-white/80">{f.slogan}</p>
              <p className="font-body mt-4 text-sm leading-relaxed text-white/55">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Parcours() {
  return (
    <section id="parcours" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="Expérience" title="Parcours & collaborations" />
        <div className="grid gap-12 md:grid-cols-12">
          <ol className="relative border-l border-[#B8925A]/40 md:col-span-7">
            {PARCOURS.map((p) => (
              <li key={p.structure} className="mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-[#B8925A]" />
                <p className="font-body text-xs uppercase tracking-[0.12em] text-[#B8925A]">{p.lieu}</p>
                <h3 className="font-display mt-1 text-2xl font-medium text-[#0B1424]">{p.structure}</h3>
                <p className="font-body mt-1 text-sm text-[#1E2329]/75">{p.poste}</p>
              </li>
            ))}
          </ol>
          <aside className="md:col-span-5">
            <div className="bg-white p-8 shadow-sm">
              <p className="font-body text-xs uppercase tracking-[0.12em] text-[#B8925A]">Collaborations antérieures</p>
              <p className="font-body mt-4 leading-relaxed text-[#1E2329]">SA GRAPHIC, AGIMEX Sarl, McCann.</p>
              <p className="font-body mt-6 text-xs uppercase tracking-[0.12em] text-[#B8925A]">Certifications</p>
              <p className="font-body mt-4 leading-relaxed text-[#1E2329]">Adobe, art graphique · Google, communication &amp; marketing digital.</p>
              <p className="font-body mt-6 text-xs uppercase tracking-[0.12em] text-[#B8925A]">Expérience internationale</p>
              <p className="font-body mt-4 leading-relaxed text-[#1E2329]">Cameroun, Côte d'Ivoire, Afrique du Sud.</p>
            </div>
          </aside>
        </div>

        <div className="mt-24">
          <SectionTitle kicker="Compétences" title="Domaines d'expertise" />
          <div className="grid gap-px bg-[#B8925A]/25 md:grid-cols-2 lg:grid-cols-4">
            {EXPERTISES.map((e) => (
              <div key={e.titre} className="bg-white p-8">
                <e.icon className="h-8 w-8 text-[#B8925A]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-display mt-5 text-2xl font-medium text-[#0B1424]">{e.titre}</h3>
                <p className="font-body mt-4 text-sm leading-relaxed text-[#1E2329]/75">{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Engagements() {
  return (
    <section id="engagements" className="bg-[#13233D] py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle kicker="Impact" title="Engagements associatifs" light />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.map((e) => (
            <div key={e.titre} className="border border-[#D9B982]/25 p-8 transition hover:border-[#D9B982]/70">
              <h3 className="font-display text-2xl font-medium text-[#D9B982]">{e.titre}</h3>
              <p className="font-body mt-4 text-sm leading-relaxed text-white/70">{e.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const d = new FormData(ev.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim() || "—";
    const nomComplet = `${get("prenom")} ${get("nom")}`;
    const subject = encodeURIComponent(`[${get("categorie")}] ${get("sujet")} — ${nomComplet}`);
    const body = encodeURIComponent(
      [
        `Nom : ${get("nom")}`,
        `Prénom : ${get("prenom")}`,
        `Catégorie : ${get("categorie")}`,
        `Organisation / projet : ${get("organisation")}`,
        `E-mail : ${get("email")}`,
        `Téléphone : ${get("telephone")}`,
        `Pays / ville : ${get("localisation")}`,
        `Sujet : ${get("sujet")}`,
        "",
        get("message"),
      ].join("\n"),
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const field = "font-body w-full rounded-full border border-[#1E2329]/10 bg-[#F7F5F0]/60 px-4 py-3 text-[#0B1424] outline-none transition-colors duration-200 placeholder:text-[#1E2329]/35 focus:border-[#B8925A] focus:bg-white";
  const label = "font-body mb-1 block text-sm text-[#1E2329]/70";
  return (
    <section id="contact" className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-full bg-[#13233D] px-6 py-3">
            <img src="/images/logo-iigna-navy.png" alt="IIGNA Capital" className="h-8 w-auto" />
          </div>
          <div className="mt-8 h-px w-16 bg-[#B8925A]" />
          <p className="font-body mt-8 max-w-sm leading-relaxed text-[#1E2329]/75">
            Vous êtes une entreprise, un porteur de projet ou un entrepreneur ? Écrivez-nous, nous revenons vers vous rapidement.
          </p>
          <ul className="font-body mt-10 space-y-3 text-[#1E2329]">
            <li className="flex items-center gap-4">
              <span aria-label="Téléphone" title="Téléphone" className={contactIcon}><Phone size={18} strokeWidth={1.75} /></span>
              <a href={`tel:${PHONE_TEL}`} className="text-base transition-colors duration-300 hover:text-[#B8925A]">{PHONE}</a>
            </li>
            <li className="flex items-center gap-4">
              <span aria-label="WhatsApp" title="WhatsApp" className={contactIcon}><MessageCircle size={18} strokeWidth={1.75} /></span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-base transition-colors duration-300 hover:text-[#B8925A]">{WHATSAPP}</a>
            </li>
            <li className="flex items-center gap-4">
              <span aria-label="E-mail" title="E-mail" className={contactIcon}><Mail size={18} strokeWidth={1.75} /></span>
              <a href={`mailto:${EMAIL}`} className="break-all text-base transition-colors duration-300 hover:text-[#B8925A]">{EMAIL}</a>
            </li>
            <li className="flex items-center gap-4">
              <span aria-label="Facebook" title="Facebook" className={contactIcon}><Facebook size={18} strokeWidth={1.75} /></span>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="text-base transition-colors duration-300 hover:text-[#B8925A]">Page Facebook IIGNA Capital</a>
            </li>
            <li className="flex items-center gap-4">
              <span aria-label="Adresse" title="Adresse" className={contactIcon}><MapPin size={18} strokeWidth={1.75} /></span>
              <span className="text-base">Sica 3 Rue Sony COLLE Bangui/RCA</span>
            </li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="md:col-span-7 grid gap-5 md:grid-cols-2">
          <div>
            <label className={label} htmlFor="prenom">Prénom *</label>
            <input id="prenom" name="prenom" required className={field} />
          </div>
          <div>
            <label className={label} htmlFor="nom">Nom *</label>
            <input id="nom" name="nom" required className={field} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="categorie">Vous êtes *</label>
            <select id="categorie" name="categorie" required defaultValue="" className={field}>
              <option value="" disabled>Choisissez une catégorie</option>
              <option>Entreprise</option>
              <option>Porteur de projet</option>
              <option>Entrepreneur</option>
              <option>Particulier</option>
              <option>Institution / ONG</option>
            </select>
          </div>
          <div>
            <label className={label} htmlFor="email">E-mail *</label>
            <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="telephone">Téléphone *</label>
            <input id="telephone" name="telephone" type="tel" required placeholder="+236 ..." className={field} />
          </div>
          <div>
            <label className={label} htmlFor="localisation">Pays / ville</label>
            <input id="localisation" name="localisation" placeholder="Bangui, RCA" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="organisation">Entreprise / projet</label>
            <input id="organisation" name="organisation" className={field} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="sujet">Sujet *</label>
            <select id="sujet" name="sujet" required defaultValue="" className={field}>
              <option value="" disabled>Choisissez un sujet</option>
              <option>Investissement</option>
              <option>Partenariat</option>
              <option>Accompagnement / création d'entreprise</option>
              <option>Juridique, administratif ou fiscal</option>
              <option>Incubateur / jeunesse</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="message">Message *</label>
            <textarea id="message" name="message" required rows={5} placeholder="Décrivez votre demande" className={`${field} rounded-none`} />
          </div>
          <label className="font-body md:col-span-2 flex items-start gap-3 text-sm text-[#1E2329]/75">
            <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 cursor-pointer rounded accent-[#B8925A] transition-transform duration-200 hover:scale-110" />
            J'accepte d'être recontacté au sujet de ma demande.
          </label>
          <button type="submit" className="font-body md:col-span-2 w-full rounded-full bg-[#0B1424] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#B8925A]">
            Envoyer le message
          </button>
          {sent && <p className="font-body md:col-span-2 text-sm text-[#B8925A]">Votre messagerie s'ouvre. Merci pour votre message.</p>}
        </form>
      </div>
    </section>
  );
}

function BottomBanner() {
  return (
    <section className="bg-[#0B1424] pb-0 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <img
          src="/images/tech-iigna.jpg"
          alt="IIGNA Capital, technologie et investissement"
          className="aspect-[2.5/1] w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B1424] py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <img src="/images/logo-iigna-custom.png" alt="IIGNA Capital" className="h-8 w-auto" />
        <p className="font-body text-xs">© {new Date().getFullYear()} MAMELENZIA Sydney Christ. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="font-body text-[#1E2329]">
      <Nav />
      <CoverBanner />
      <Hero />
      <About />
      <Holding />
      <Parcours />
      <Engagements />
      <Contact />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default Index;
