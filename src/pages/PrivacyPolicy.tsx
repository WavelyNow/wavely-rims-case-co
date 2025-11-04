import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm italic">
            Last updated: {new Date().toLocaleDateString('ro-RO')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">1. Introducere</h2>
            <p>
              SC WAVELY SRL ("noi", "noastră" sau "Wavely") respectă confidențialitatea dvs. și se angajează să protejeze datele cu caracter personal pe care ni le furnizați. Această Politică de Confidențialitate descrie modul în care colectăm, utilizăm, dezvăluim și protejăm informațiile dvs. personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">2. Date cu Caracter Personal Colectate</h2>
            <p>Colectăm următoarele categorii de date personale:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Date de identificare:</strong> nume, prenume, adresă de email, număr de telefon</li>
              <li><strong>Date de livrare:</strong> adresă de livrare, oraș, cod poștal, țară</li>
              <li><strong>Date de plată:</strong> informații despre tranzacții (procesate securizat prin Shopify Payments)</li>
              <li><strong>Date de navigare:</strong> adresă IP, tip de browser, pagini vizitate, durata vizitei</li>
              <li><strong>Date de customizare:</strong> fotografii încărcate pentru personalizarea produselor, text personalizat</li>
              <li><strong>Cookie-uri și tehnologii similare:</strong> conform Politicii noastre de Cookie-uri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">3. Scopul Prelucrării Datelor</h2>
            <p>Folosim datele dvs. personale pentru următoarele scopuri:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesarea și livrarea comenzilor dvs.</li>
              <li>Comunicarea cu dvs. în legătură cu comanda (confirmare, actualizări de livrare)</li>
              <li>Furnizarea de servicii de asistență pentru clienți</li>
              <li>Îmbunătățirea experienței de cumpărături și a website-ului nostru</li>
              <li>Marketing și comunicări promoționale (doar cu consimțământul dvs.)</li>
              <li>Prevenirea fraudei și securitatea tranzacțiilor</li>
              <li>Respectarea obligațiilor legale (contabilitate, fiscalitate)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">4. Temei Legal</h2>
            <p>Prelucrăm datele dvs. personale pe baza următoarelor temeiuri legale:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Executarea contractului:</strong> pentru procesarea comenzilor și livrarea produselor</li>
              <li><strong>Consimțământ:</strong> pentru marketing, newsletter și comunicări promoționale</li>
              <li><strong>Interes legitim:</strong> pentru îmbunătățirea serviciilor și prevenirea fraudei</li>
              <li><strong>Obligație legală:</strong> pentru conformitatea cu legislația fiscală și contabilă</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">5. Partajarea Datelor</h2>
            <p>Datele dvs. personale pot fi partajate cu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Furnizori de servicii de plată:</strong> Shopify Payments (pentru procesarea plăților)</li>
              <li><strong>Companii de curierat:</strong> pentru livrarea comenzilor</li>
              <li><strong>Furnizori de servicii cloud:</strong> pentru găzduirea website-ului și stocarea datelor</li>
              <li><strong>Furnizori de servicii de email marketing:</strong> pentru trimiterea newsletterelor (cu consimțământul dvs.)</li>
              <li><strong>Autorități publice:</strong> atunci când este necesar conform legii</li>
            </ul>
            <p className="mt-4">
              Nu vindem și nu închiriem datele dvs. personale către terți pentru scopuri de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">6. Transfer de Date în Afara UE</h2>
            <p>
              Unii dintre furnizorii noștri de servicii pot fi localizați în afara Uniunii Europene. În astfel de cazuri, ne asigurăm că sunt implementate garanții adecvate, cum ar fi Clauzele Contractuale Standard ale UE, pentru a proteja datele dvs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">7. Perioada de Stocare</h2>
            <p>Păstrăm datele dvs. personale pentru următoarele perioade:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Date de comandă:</strong> 10 ani (conform legislației fiscale și contabile din România)</li>
              <li><strong>Date de marketing:</strong> până la retragerea consimțământului sau 3 ani de inactivitate</li>
              <li><strong>Date de navigare:</strong> conform Politicii de Cookie-uri (max. 13 luni)</li>
              <li><strong>Fotografii încărcate:</strong> șters după finalizarea comenzii, dacă nu solicitați altfel</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">8. Drepturile Dvs.</h2>
            <p>În conformitate cu GDPR, aveți următoarele drepturi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dreptul de acces:</strong> să obțineți o copie a datelor personale pe care le deținem despre dvs.</li>
              <li><strong>Dreptul de rectificare:</strong> să corectați datele inexacte sau incomplete</li>
              <li><strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> să solicitați ștergerea datelor dvs.</li>
              <li><strong>Dreptul la restricționarea prelucrării:</strong> să limitați modul în care folosim datele dvs.</li>
              <li><strong>Dreptul la portabilitatea datelor:</strong> să primiți datele într-un format structurat</li>
              <li><strong>Dreptul la opoziție:</strong> să vă opuneți prelucrării pentru marketing direct</li>
              <li><strong>Dreptul de a retrage consimțământul:</strong> în orice moment, fără a afecta legalitatea prelucrării anterioare</li>
            </ul>
            <p className="mt-4">
              Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la: <a href="mailto:privacy@wavely.ro" className="text-primary hover:underline">privacy@wavely.ro</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">9. Securitatea Datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dvs. personale împotriva accesului neautorizat, modificării, dezvăluirii sau distrugerii. Acestea includ:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptare SSL/TLS pentru toate comunicările</li>
              <li>Acces restricționat la datele personale (doar personal autorizat)</li>
              <li>Backup-uri regulate și securizate</li>
              <li>Monitorizarea și testarea regulată a sistemelor de securitate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">10. Copii și Minori</h2>
            <p>
              Website-ul nostru nu este destinat copiilor sub 16 ani. Nu colectăm în mod conștient date personale de la copii sub această vârstă. Dacă descoperim că am colectat astfel de date, le vom șterge imediat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">11. Modificări ale Politicii</h2>
            <p>
              Ne rezervăm dreptul de a modifica această Politică de Confidențialitate în orice moment. Orice modificări vor fi publicate pe această pagină cu data actualizării. Vă recomandăm să verificați periodic această politică.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">12. Contact și Plângeri</h2>
            <p>
              <strong>Operator de date:</strong> SC WAVELY SRL<br />
              <strong>Email:</strong> <a href="mailto:privacy@wavely.ro" className="text-primary hover:underline">privacy@wavely.ro</a><br />
              <strong>Telefon:</strong> [COMPLETEAZĂ]<br />
              <strong>Adresă:</strong> Băiculești, Argeș, România
            </p>
            <p className="mt-4">
              Dacă considerați că drepturile dvs. au fost încălcate, aveți dreptul să depuneți o plângere la:
            </p>
            <p>
              <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br />
              Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dataprotection.ro</a><br />
              Email: anspdcp@dataprotection.ro
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
