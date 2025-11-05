import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Produse & Personalizare",
      questions: [
        {
          q: "Ce materiale folosiți pentru huse?",
          a: "Husele noastre sunt fabricate din materiale premium: TPU flexibil pentru protecție la impact, policarbonat rigid pentru durabilitate maximă, și finisaj mat soft-touch pentru o senzație premium în mână. Toate materialele sunt testate pentru rezistență la zgârieturi și uzură."
        },
        {
          q: "Cum funcționează procesul de personalizare?",
          a: "Personalizarea este simplă: 1) Alegi modelul de telefon, 2) Selectezi designul de jantă (avem peste 200 de modele), 3) Încarci poze cu mașina ta sau alte imagini preferate, 4) Adaugi text personalizat (opțional), 5) Vezi preview-ul live și confirmi comanda. Întregul proces durează 2-3 minute."
        },
        {
          q: "Pot încărca orice tip de imagine?",
          a: "Da! Accepăm imagini în format JPG, PNG, și HEIC (iOS). Pentru calitate optimă, recomandăm imagini cu rezoluție minimă de 1000x1000 pixeli. Echipa noastră verifică fiecare design înainte de producție și te contactează dacă sunt necesare ajustări."
        },
        {
          q: "Designul de jantă este 3D real sau doar printat?",
          a: "Jantele sunt realizate prin tehnologie de printare 3D avansată, creând un relief tactil autentic. Nu este doar o imagine printată - poți simți textura și detaliile fiecărei jante. Aceasta este diferența noastră față de alte huse personalizate."
        },
        {
          q: "Câte modele de telefon susțineți?",
          a: "Suportăm toate modelele populare iPhone (iPhone 12-16 Series), Samsung Galaxy (S20-S24, Note), Google Pixel (6-8), și multe altele. Lista completă este disponibilă în configuratorul de personalizare. Dacă nu găsești modelul tău, contactează-ne și vom verifica disponibilitatea."
        }
      ]
    },
    {
      category: "Comenzi & Plăți",
      questions: [
        {
          q: "Ce metode de plată acceptați?",
          a: "Acceptăm plata cu card (Visa, Mastercard, American Express), Google Pay, Apple Pay, și plata ramburs la livrare (disponibil în România). Toate tranzacțiile sunt securizate prin Stripe, cel mai mare procesator de plăți din lume."
        },
        {
          q: "Pot modifica sau anula comanda după plasare?",
          a: "Poți anula sau modifica comanda în primele 2 ore după plasare, contactându-ne urgent la comenzi@wavely.ro sau pe WhatsApp. După această perioadă, husa intră în producție personalizată și nu mai poate fi modificată."
        },
        {
          q: "Primiți factură fiscală?",
          a: "Da, toate comenzile includ factură fiscală electronică care este trimisă automat pe email după expediere. Pentru firmă, introdu datele companiei (CUI, denumire) în câmpurile dedicate la checkout."
        },
        {
          q: "Aveți cod de reducere pentru prima comandă?",
          a: "Da! Abonează-te la newsletter pentru 10% discount la prima comandă. Mai avem promoții speciale pe pagina de Giveaway și programe de referral care îți oferă reduceri pentru prietenii recomandați."
        }
      ]
    },
    {
      category: "Livrare & Transport",
      questions: [
        {
          q: "Cât durează livrarea?",
          a: "Producția personalizată durează 2-3 zile lucrătoare. După expediere, livrarea în România durează 1-2 zile (Fan Courier). Livrare internațională în UE: 3-5 zile. Primești tracking automat pe email și SMS când coletul este expediat."
        },
        {
          q: "Cât costă transportul?",
          a: "Livrare standard în România: 15 lei. Transport GRATUIT pentru comenzi peste 150 lei. Livrare internațională: 35 lei în UE, 50 lei în afara UE. Prețul final este afișat la checkout înainte de confirmare."
        },
        {
          q: "Livrați în toată țara?",
          a: "Da, livrăm în toată România prin Fan Courier, inclusiv în localități mici. Pentru livrări internaționale, acoperim întreaga Uniune Europeană și alte țări selectate (UK, Elveția, SUA, Canada)."
        },
        {
          q: "Ce se întâmplă dacă nu sunt acasă la livrare?",
          a: "Curierul va încerca să te contacteze telefonic. Dacă nu ești disponibil, coletul va fi depozitat la sediul Fan Courier din orașul tău, unde îl poți ridica în următoarele 7 zile. Vei primi SMS cu adresa și programul."
        }
      ]
    },
    {
      category: "Returnări & Garanții",
      questions: [
        {
          q: "Pot returna husa dacă nu îmi place?",
          a: "Da! Ai 14 zile drept de returnare conform legislației europene. Husa trebuie să fie nefolosită, în ambalajul original. Notă: produsele personalizate pot fi returnate doar dacă au defecte de fabricație, nu pentru schimbare de design."
        },
        {
          q: "Ce garanție oferă husele?",
          a: "Oferim garanție de 12 luni pentru defecte de fabricație: crăpături, desprinderea designului, decolorare. Garanția nu acoperă uzura normală sau daunele cauzate de impact/cădere. Pentru probleme, contactează support@wavely.ro cu poze și descrierea problemei."
        },
        {
          q: "Ce fac dacă husa sosește deteriorată?",
          a: "Dacă husa sosește cu defecte vizibile sau deteriorări, contactează-ne imediat (max 48h) la support@wavely.ro cu poze clare ale problemei. Vom trimite înlocuire gratuită sau rambursare completă, fără costuri de transport pentru tine."
        },
        {
          q: "Cum funcționează procesul de retur?",
          a: "1) Anunță-ne prin email că dorești să returnezi produsul în 14 zile, 2) Primești email cu instrucțiuni și adresa de retur, 3) Expediezi produsul (costul transportului retur este suportat de client, except defecte), 4) Verificăm produsul primit, 5) Procesăm rambursarea în 5-7 zile lucrătoare."
        }
      ]
    },
    {
      category: "Întreținere & Durabilitate",
      questions: [
        {
          q: "Husele sunt rezistente la zgârieturi?",
          a: "Da, materialele noastre sunt tratate anti-zgârieturi și testate pentru uzură zilnică. Designul 3D și printul sunt protejate cu un strat transparent UV-resistant care previne decolorarea și zgârieturile superficiale."
        },
        {
          q: "Cum curăț husa fără să deteriorez designul?",
          a: "Curăță husa cu o cârpă moale umedă și săpun neutru. NU folosi alcool, acetone sau detergenți abrazivi care pot deteriora printul. Pentru pete persistente, folosește o periuță moale. Lasă husa să se usuce complet înainte de remontare."
        },
        {
          q: "Designul se șterge în timp?",
          a: "Nu! Folosim tehnologie de sublimation printing de grad industrial care pătrunde în material, nu doar pe suprafață. Designul este acoperit cu finisaj UV-protective care previne decolorarea chiar și la expunere îndelungată la soare."
        },
        {
          q: "Husa devine gălbuie în timp?",
          a: "Materialele noastre premium sunt tratate anti-îngălbenire. Spre deosebire de husele TPU ieftine care devin gălbui în 2-3 luni, husele Wavely își mențin culoarea originală pentru 12+ luni la utilizare normală."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 animate-fade-in">
            Întrebări <span className="bg-gradient-accent bg-clip-text text-transparent">Frecvente</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Toate răspunsurile de care ai nevoie despre produsele noastre, livrare, și servicii
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-primary">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${idx}-${qIdx}`}
                    className="bg-card/50 backdrop-blur rounded-lg border border-border/40 px-6 shadow-card hover:shadow-premium transition-premium"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-card/30 backdrop-blur rounded-xl p-8 border border-border/40 animate-fade-in">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Nu ai găsit răspunsul?
            </h3>
            <p className="text-muted-foreground mb-6">
              Echipa noastră de support este aici să te ajute!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-8 bg-gradient-accent hover:shadow-glow transition-smooth"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
