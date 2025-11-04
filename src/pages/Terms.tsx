import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm italic">
            Last updated: {new Date().toLocaleDateString('ro-RO')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">1. Informații Generale</h2>
            <p>
              Prezentul document constituie Termeni și Condiții Generale de Utilizare și Vânzare (în continuare "Termeni") pentru website-ul <strong>wavely.ro</strong> (în continuare "Site"), operat de <strong>SC WAVELY SRL</strong>, înregistrată în România cu următoarele date:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CUI: RO[COMPLETEAZĂ]</li>
              <li>Nr. Reg. Com.: J[XX]/[NNN]/[AAAA]</li>
              <li>Sediu social: Băiculești, Argeș, România</li>
              <li>Email: contact@wavely.ro</li>
              <li>Telefon: [COMPLETEAZĂ]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">2. Acceptarea Termenilor</h2>
            <p>
              Prin accesarea și utilizarea acestui Site și prin plasarea unei comenzi, confirmi că ai citit, ai înțeles și accepți să fii legat de acești Termeni, precum și de Politica de Confidențialitate și Politica de Cookie-uri. Dacă nu ești de acord cu acești Termeni, te rugăm să nu folosești Site-ul.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">3. Produse și Servicii</h2>
            <p>
              Wavely oferă huse personalizate pentru telefoane mobile cu design inspirat din lumea automobilelor, incluzând:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Huse cu designuri pre-configurate disponibile pentru achiziție directă</li>
              <li>Servicii de personalizare care permit încărcarea de fotografii personale și adăugarea de text custom</li>
              <li>Selecție din 8+ stiluri de jante auto authentice</li>
              <li>Opțiuni multiple de materiale (matte, glossy, leather, metallic)</li>
            </ul>
            <p className="mt-4">
              Toate produsele sunt fabricate la comandă și sunt create special pentru fiecare client. Imaginile produselor afișate pe Site au caracter ilustrativ. Ne rezervăm dreptul de a face modificări minore în design pentru a îmbunătăți calitatea produsului final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">4. Procesul de Comandă</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">4.1. Plasarea Comenzii</h3>
            <p>
              Pentru a plasa o comandă:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Selectează modelul de telefon compatibil</li>
              <li>Alege stilul de jantă și materialul dorit</li>
              <li>Opțional: Încarcă fotografii personale și/sau adaugă text personalizat</li>
              <li>Adaugă produsul în coș</li>
              <li>Completează informațiile de livrare și facturare</li>
              <li>Selectează metoda de plată și finalizează comanda</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">4.2. Confirmare Comandă</h3>
            <p>
              După plasarea comenzii, vei primi un email de confirmare cu detaliile comenzii. Acest email reprezintă acceptarea comenzii tale de către Wavely și formarea contractului de vânzare-cumpărare.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">4.3. Modificarea sau Anularea Comenzii</h3>
            <p>
              Poți anula sau modifica comanda în termen de 2 ore de la plasare, contactându-ne la <a href="mailto:contact@wavely.ro" className="text-primary hover:underline">contact@wavely.ro</a>. După ce produsul a intrat în producție, nu mai este posibilă anularea sau modificarea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">5. Prețuri și Plăți</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">5.1. Prețuri</h3>
            <p>
              Toate prețurile afișate pe Site sunt în LEI (RON) și includ TVA 19%. Prețurile nu includ costuri de livrare, care vor fi calculate și afișate la checkout.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">5.2. Metode de Plată</h3>
            <p>
              Acceptăm următoarele metode de plată:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Card bancar (Visa, Mastercard) - prin Shopify Payments</li>
              <li>PayPal</li>
              <li>Apple Pay / Google Pay</li>
            </ul>
            <p className="mt-4">
              Toate plățile sunt procesate securizat prin gateway-uri de plată certificate PCI DSS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">6. Livrare</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">6.1. Zone de Livrare</h3>
            <p>
              Livrăm în toată România și în Uniunea Europeană.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.2. Termen de Livrare</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Producție:</strong> 5-7 zile lucrătoare (produse personalizate fabricate la comandă)</li>
              <li><strong>Livrare în România:</strong> 2-3 zile lucrătoare după finalizarea producției</li>
              <li><strong>Livrare în UE:</strong> 5-10 zile lucrătoare după finalizarea producției</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.3. Costuri de Livrare</h3>
            <p>
              Livrare gratuită pentru comenzi peste 150 RON în România. Pentru comenzi sub acest prag și livrări internaționale, costul va fi afișat la checkout.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.4. Ridicare Personală</h3>
            <p>
              Opțiunea de ridicare personală nu este disponibilă momentan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">7. Drept de Retragere (Conform OUG 34/2014)</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">7.1. Perioada de Retragere</h3>
            <p>
              În conformitate cu legislația românească (OUG 34/2014), ai dreptul de a te retrage din contract în termen de <strong>14 zile calendaristice</strong> de la data primirii produsului, fără a fi nevoie să justifici decizia și fără a suporta alte costuri decât costurile directe de returnare.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">7.2. EXCEPȚIE - Produse Personalizate</h3>
            <p className="text-yellow-500 font-semibold">
              IMPORTANT: Conform art. 16, lit. c) din OUG 34/2014, dreptul de retragere NU se aplică pentru produsele confecționate după specificațiile clientului sau personalizate în mod clar.
            </p>
            <p className="mt-4">
              Deoarece toate produsele Wavely sunt fabricate la comandă și personalizate (cu fotografii încărcate de client, text personalizat, sau combinații unice de modele/jante/materiale), acestea intră în categoria <strong>produselor personalizate</strong> pentru care dreptul de retragere nu se aplică.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">7.3. Excepții - Produse Defecte</h3>
            <p>
              Dreptul de retragere nu se aplică pentru produse personalizate, DAR ești protejat de garanția legală de conformitate. Dacă produsul este defect, deteriorat la livrare, sau nu corespunde specificațiilor, te rugăm să ne contactezi imediat pentru înlocuire sau rambursare. Vezi secțiunea "Garanție și Reclamații".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">8. Garanție și Reclamații</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">8.1. Garanție Legală de Conformitate</h3>
            <p>
              Toate produsele beneficiază de garanția legală de conformitate de 24 luni conform Legii 449/2003. Dacă produsul este defect sau nu corespunde specificațiilor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>În primele 6 luni: prezumția este că defectul exista la momentul livrării</li>
              <li>După 6 luni: trebuie să demonstrezi că defectul exista la momentul livrării</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">8.2. Procedura de Reclamație</h3>
            <p>
              Pentru a reclama un produs defect:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contactează-ne la <a href="mailto:contact@wavely.ro" className="text-primary hover:underline">contact@wavely.ro</a> în termen de 48 ore de la primirea coletului</li>
              <li>Trimite fotografii clare ale defectului</li>
              <li>Păstrează ambalajul original</li>
              <li>Vom analiza cazul și vom oferi soluții: înlocuire, reparație sau rambursare</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">8.3. Produse Deteriorate la Transport</h3>
            <p>
              Dacă coletul este deteriorat vizibil, refuză primirea și contactează-ne imediat. Dacă deteriorarea este descoperită după deschiderea coletului, păstrează toate materialele de ambalare și contactează-ne în 24 ore.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">9. Proprietate Intelectuală și Fotografii Încărcate</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">9.1. Conținutul Site-ului</h3>
            <p>
              Tot conținutul prezent pe Site (logo, imagini, texte, design) este proprietatea Wavely și este protejat de legile privind drepturile de autor și proprietatea intelectuală.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">9.2. Fotografii Încărcate de Clienți</h3>
            <p>
              Când încarci fotografii pentru personalizare, garantezi că:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deții drepturile asupra fotografiilor sau ai permisiunea de a le folosi</li>
              <li>Fotografiile nu încalcă drepturile de autor ale terților</li>
              <li>Nu conțin materiale ilegale, obscene, ofensatoare sau care încalcă drepturile altora</li>
            </ul>
            <p className="mt-4">
              Ne rezervăm dreptul de a refuza procesarea comenzilor care conțin imagini inadecvate sau ilegale.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">9.3. Utilizarea Fotografiilor pentru Marketing</h3>
            <p>
              Dacă alegi să participi la programul nostru de share ("Upload Your Photo & Get 10% Off"), ne acorzi permisiunea de a folosi fotografiile pentru scopuri de marketing, inclusiv pe Site și rețele sociale. Poți opta out oricând.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">10. Limitarea Răspunderii</h2>
            <p>
              În limitele legii, Wavely nu poate fi tras la răspundere pentru:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Întârzieri cauzate de forță majoră sau factori în afara controlului nostru</li>
              <li>Erori minore de culoare cauzate de diferențele între ecrane și imprimare</li>
              <li>Deteriorări cauzate de utilizarea necorespunzătoare a produsului</li>
              <li>Pierderi indirecte sau consecutive</li>
            </ul>
            <p className="mt-4">
              Răspunderea noastră maximă este limitată la valoarea produsului achiziționat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">11. Soluționarea Litigiilor</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">11.1. Negociere Amiabilă</h3>
            <p>
              În cazul oricărei dispute, încurajăm rezolvarea amiabilă prin comunicare directă la <a href="mailto:contact@wavely.ro" className="text-primary hover:underline">contact@wavely.ro</a>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">11.2. Soluționarea Alternativă a Litigiilor (SAL)</h3>
            <p>
              Conform Regulamentului UE 524/2013, ai acces la platforma europeană de soluționare online a litigiilor (SOL): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">11.3. ANPC</h3>
            <p>
              Poți depune reclamații la Autoritatea Națională pentru Protecția Consumatorilor (ANPC): <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.anpc.ro</a>
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">11.4. Instanțele Competente</h3>
            <p>
              Orice litigiu care nu poate fi rezolvat amiabil va fi soluționat de instanțele române competente, conform legislației în vigoare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">12. Modificări ale Termenilor</h2>
            <p>
              Ne rezervăm dreptul de a modifica acești Termeni în orice moment. Modificările vor intra în vigoare imediat după publicare pe Site. Continuarea utilizării Site-ului după modificări constituie acceptarea noilor Termeni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">13. Contact</h2>
            <p>
              Pentru orice întrebări referitoare la acești Termeni, te rugăm să ne contactezi:
            </p>
            <p className="mt-4">
              <strong>SC WAVELY SRL</strong><br />
              Email: <a href="mailto:contact@wavely.ro" className="text-primary hover:underline">contact@wavely.ro</a><br />
              Telefon: [COMPLETEAZĂ]<br />
              Adresă: Băiculești, Argeș, România
            </p>
          </section>

          <div className="border-t border-border/40 pt-6 mt-8">
            <p className="text-sm text-center">
              Prin plasarea unei comenzi pe wavely.ro, confirmi că ai citit și accepți acești Termeni și Condiții.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
