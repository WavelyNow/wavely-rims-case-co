import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Return & Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm italic">
            Last updated: {new Date().toLocaleDateString('ro-RO')}
          </p>

          {/* Important Notice */}
          <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6 my-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">Politică Importantă - Produse Personalizate</h3>
                <p className="text-foreground">
                  Deoarece toate produsele Wavely sunt <strong>fabricate la comandă și personalizate</strong> (cu fotografii încărcate de tine, text personalizat, sau combinații unice de modele/jante/materiale), acestea sunt considerate <strong>produse confecționate după specificațiile clientului</strong> conform art. 16, lit. c) din OUG 34/2014.
                </p>
                <p className="text-foreground mt-2">
                  Prin urmare, <strong>dreptul de retragere din contract de 14 zile NU se aplică</strong> pentru produsele Wavely.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">1. Dreptul de Retragere și Produse Personalizate</h2>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">NU acceptăm returnări pentru:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Huse personalizate cu fotografii încărcate de client</li>
                    <li>Huse cu text personalizat adăugat de client</li>
                    <li>Orice produs configurat/personalizat prin configuratorul nostru</li>
                    <li>Produse care nu prezintă defecte de fabricație</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Acceptăm returnări/înlocuiri DOAR pentru:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Produse cu defecte de fabricație</li>
                    <li>Produse deteriorate în timpul transportului</li>
                    <li>Produse care nu corespund specificațiilor comenzii tale</li>
                    <li>Erori din partea noastră în procesarea comenzii</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">2. Temei Legal</h2>
            <p>
              Conform <strong>OUG 34/2014 privind drepturile consumatorilor</strong>, art. 16, lit. c), dreptul de retragere NU se aplică pentru:
            </p>
            <blockquote className="border-l-4 border-primary/50 pl-4 italic my-4 text-foreground">
              "furnizarea de bunuri confecționate după specificațiile consumatorului sau personalizate în mod clar"
            </blockquote>
            <p>
              Toate produsele Wavely intră în această categorie, fiind create individual pentru fiecare client în funcție de opțiunile selectate (model telefon, stil jantă, material, fotografii, text).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">3. Garanția Produselor - Ce Este Acoperit</h2>
            <p>
              Deși nu oferim drept de retragere pentru produse personalizate, <strong>toate produsele beneficiază de garanție legală de conformitate de 24 luni</strong> conform Legii 449/2003.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">3.1. Defecte de Fabricație Acoperite:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lipirea defectuoasă a jantei 3D pe carcasă</li>
              <li>Probleme cu materialul cauzate de procesul de fabricație</li>
              <li>Imprimare de calitate slabă sau decolorare prematură</li>
              <li>Crăpături sau deteriorări care nu sunt cauzate de utilizare normală</li>
              <li>Probleme cu butoanele sau porturile care nu funcționează corect</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">3.2. NU Sunt Acoperite de Garanție:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uzura normală în timp (zgârieturi de uz normal, decolorare după mulți ani)</li>
              <li>Deteriorări cauzate de scăpare, lovire sau utilizare necorespunzătoare</li>
              <li>Modificări sau reparații efectuate de terți</li>
              <li>Expunere la condiții extreme (căldură extremă, substanțe chimice, etc.)</li>
              <li>Diferențe minore de culoare față de afișarea pe ecran (variații naturale între monitoare și imprimare)</li>
              <li>Nepotrivire cauzată de furnizarea de informații greșite la comandă (model telefon greșit, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">4. Procedura de Reclamație pentru Produse Defecte</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">Pasul 1: Contactează-ne Rapid</h3>
            <p>
              Dacă produsul tău are un defect de fabricație sau a fost deteriorat în transport, contactează-ne <strong>în termen de 48 ore</strong> de la primirea coletului la:
            </p>
            <ul className="list-disc pl-6 space-y-1 my-3">
              <li>Email: <a href="mailto:returns@wavely.ro" className="text-primary hover:underline">returns@wavely.ro</a></li>
              <li>Telefon: [COMPLETEAZĂ]</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Pasul 2: Furnizează Dovezi</h3>
            <p>Trebuie să incluzi următoarele în email:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Numărul comenzii</li>
              <li>Fotografii clare ale defectului (minimum 3 unghiuri diferite)</li>
              <li>Descriere detaliată a problemei</li>
              <li>Fotografie a ambalajului original (dacă este deteriorat)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Pasul 3: Evaluare și Soluție</h3>
            <p>
              Vom evalua cazul tău în termen de <strong>24-48 ore lucrătoare</strong> și vom oferi una dintre următoarele soluții:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Înlocuire gratuită:</strong> Fabricăm un produs nou identic și îl expediăm fără costuri suplimentare</li>
              <li><strong>Rambursare completă:</strong> Returnezi produsul defect și primești banii înapoi integral</li>
              <li><strong>Credit magazin cu bonus:</strong> Dacă preferi credit pentru o comandă viitoare, oferim +10% bonus</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Pasul 4: Returnare (dacă este cazul)</h3>
            <p>
              Dacă se aprobă returnarea:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Îți vom trimite o etichetă de returnare pre-plătită prin email</li>
              <li>Ambalează produsul în ambalajul original</li>
              <li>Lipește eticheta pe colet și predă-l la curier</li>
              <li>Vei primi tracking number pentru a urmări returnarea</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">5. Produse Deteriorate în Transport</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">5.1. Deteriorare Vizibilă a Coletului</h3>
            <p>
              Dacă coletul prezintă deteriorări vizibile la livrare (colet zdrobit, desfăcut, etc.):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>REFUZĂ</strong> primirea coletului dacă deteriorarea este severă</li>
              <li>Contactează-ne imediat cu fotografii ale coletului deteriorat</li>
              <li>Vom expedia un produs nou fără costuri suplimentare</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">5.2. Deteriorare Descoperită După Deschidere</h3>
            <p>
              Dacă descoperi deteriorarea după deschiderea coletului:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Păstrează TOATE materialele de ambalare</li>
              <li>Fă fotografii clare ale produsului și ambalajului</li>
              <li>Contactează-ne în termen de <strong>24 ore</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">6. Nepotrivire sau Comandă Greșită</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">6.1. Eroare Din Partea Noastră</h3>
            <p>
              Dacă am greșit comanda (model telefon greșit, jantă greșită, text greșit, etc.):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contactează-ne imediat cu dovezi fotografice</li>
              <li>Îți vom expedia produsul corect GRATUIT</li>
              <li>Poți păstra produsul greșit sau îl returnezi (noi suportăm costurile)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.2. Eroare Din Partea Ta</h3>
            <p>
              Dacă ai selectat modelul greșit de telefon sau alte opțiuni greșite:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Din păcate, nu putem accepta returnarea (produs personalizat)</li>
              <li>Poți comanda un produs nou cu specificațiile corecte</li>
              <li>Oferim <strong>15% discount</strong> pentru o comandă de înlocuire în astfel de cazuri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">7. Termene de Rambursare</h2>
            <p>
              Dacă se aprobă rambursarea:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Procesare returnare:</strong> 2-3 zile lucrătoare după primirea produsului returnat</li>
              <li><strong>Rambursare prin card:</strong> 5-10 zile lucrătoare (în funcție de banca emitentă)</li>
              <li><strong>Rambursare prin PayPal:</strong> 1-3 zile lucrătoare</li>
              <li><strong>Credit magazin:</strong> Imediat după aprobare</li>
            </ul>
            <p className="mt-4">
              Rambursarea include valoarea produsului. Costurile de livrare inițiale sunt rambursate DOAR dacă defectul este din cauza noastră.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">8. Întrebări Frecvente</h2>
            
            <div className="space-y-4">
              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Î: Pot returna husa dacă nu-mi place cum arată fotografia imprimată?</h4>
                <p className="text-sm">
                  R: Din păcate, nu. Oferim o previzualizare live în configurator înainte de comandă. Diferențe minore de culoare între ecran și imprimare sunt normale și nu constituie un defect. Asigură-te că ești mulțumit de previzualizare înainte de a comanda.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Î: Am comandat modelul greșit de telefon. Pot schimba?</h4>
                <p className="text-sm">
                  R: Dacă eroarea este din partea noastră, DA, schimbăm gratuit. Dacă ai selectat tu modelul greșit, nu putem accepta returnarea, dar oferim 15% discount pentru o nouă comandă.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Î: Janta 3D s-a desprins. Este acoperit de garanție?</h4>
                <p className="text-sm">
                  R: DA, absolut! Dacă janta se desprinde din cauza unei probleme de fabricație (nu din cauza unei lovituri), o înlocuim gratuit în cadrul garanției de 24 luni.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Î: Husa s-a crăpat după 3 luni de utilizare normală.</h4>
                <p className="text-sm">
                  R: Acest lucru nu ar trebui să se întâmple cu utilizare normală și este acoperit de garanție. Contactează-ne cu fotografii și vom înlocui produsul.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Î: Am scăpat telefonul și husa s-a spart. Pot primi înlocuire?</h4>
                <p className="text-sm">
                  R: Din păcate, deteriorările cauzate de lovituri sau scăpări nu sunt acoperite de garanție. Poți comanda o husă nouă cu discount de loialitate de 10%.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">9. Contact pentru Returnări</h2>
            <p>
              Pentru orice întrebări legate de returnări sau garanție:
            </p>
            <p className="mt-4">
              <strong>Departament Returnări & Garanții</strong><br />
              Email: <a href="mailto:returns@wavely.ro" className="text-primary hover:underline">returns@wavely.ro</a><br />
              Telefon: [COMPLETEAZĂ]<br />
              Program: Luni-Vineri, 9:00-18:00 EET
            </p>
            <p className="mt-4 text-sm">
              <strong>Timp de răspuns:</strong> 24-48 ore lucrătoare
            </p>
          </section>

          <div className="border-t border-border/40 pt-6 mt-8">
            <p className="text-sm text-center">
              <strong>Notă Importantă:</strong> Înainte de a plasa comanda, verifică cu atenție toate opțiunile selectate (model telefon, stil jantă, fotografii, text) în configurator. Fiind produse personalizate, nu putem accepta returnări pentru schimbări de opinie sau greșeli de selecție.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;
