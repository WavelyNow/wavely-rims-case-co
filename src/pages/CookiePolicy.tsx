import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm italic">
            Last updated: {new Date().toLocaleDateString('ro-RO')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">1. Ce Sunt Cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text mici pe care website-ul nostru le stochează pe dispozitivul tău (computer, smartphone, tabletă) când vizitezi wavely.ro. Acestea ne permit să recunoaștem dispozitivul tău și să îmbunătățim experiența ta de navigare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">2. De Ce Folosim Cookie-uri?</h2>
            <p>
              Folosim cookie-uri pentru a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Menține funcționalitatea de bază a site-ului (ex: coș de cumpărături)</li>
              <li>Îmbunătăți performanța și securitatea site-ului</li>
              <li>Analiza modul în care vizitatorii folosesc site-ul nostru</li>
              <li>Personaliza conținutul și reclamele</li>
              <li>Facilita autentificarea utilizatorilor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">3. Tipuri de Cookie-uri Utilizate</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">3.1. Cookie-uri Strict Necesare (Esențiale)</h3>
            <p>
              Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. Fără ele, serviciile de bază (cum ar fi coșul de cumpărături) nu ar funcționa.
            </p>
            <div className="bg-card/30 border border-border/40 rounded-lg p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-2">Exemple:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>wavely-cart:</strong> Stochează articolele din coșul tău (30 zile)</li>
                <li><strong>session_id:</strong> Menține sesiunea ta activă (până la închiderea browser-ului)</li>
                <li><strong>cookie_consent:</strong> Reține preferințele tale despre cookie-uri (12 luni)</li>
              </ul>
              <p className="text-xs mt-3 text-muted-foreground">
                <strong>Temei legal:</strong> Interes legitim (necesare pentru funcționarea serviciului)
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3.2. Cookie-uri de Performanță și Analiză</h3>
            <p>
              Aceste cookie-uri colectează informații despre modul în care vizitatorii folosesc site-ul nostru, permițându-ne să îmbunătățim experiența utilizatorului.
            </p>
            <div className="bg-card/30 border border-border/40 rounded-lg p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-2">Cookie-uri Google Analytics:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>_ga:</strong> Identificator unic pentru sesiune (2 ani)</li>
                <li><strong>_gid:</strong> Identificator pentru sesiune activă (24 ore)</li>
                <li><strong>_gat:</strong> Limitare rată de cereri (1 minut)</li>
              </ul>
              <p className="text-xs mt-3 text-muted-foreground">
                <strong>Informații colectate:</strong> Pagini vizitate, durata vizitei, sursă de trafic, comportament de navigare (date anonimizate)<br />
                <strong>Temei legal:</strong> Consimțământ
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3.3. Cookie-uri de Marketing și Publicitate</h3>
            <p>
              Aceste cookie-uri sunt folosite pentru a afișa reclame relevante pentru tine pe alte site-uri și pentru a măsura eficiența campaniilor noastre publicitare.
            </p>
            <div className="bg-card/30 border border-border/40 rounded-lg p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-2">Facebook Pixel:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>_fbp:</strong> Tracking utilizatori Facebook (90 zile)</li>
                <li><strong>fr:</strong> Publicitate Facebook (90 zile)</li>
              </ul>
              <p className="text-sm font-semibold text-foreground mb-2 mt-4">TikTok Pixel:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>_ttp:</strong> Tracking utilizatori TikTok (13 luni)</li>
              </ul>
              <p className="text-xs mt-3 text-muted-foreground">
                <strong>Scopuri:</strong> Retargeting, măsurare conversii, optimizare campanii ads<br />
                <strong>Temei legal:</strong> Consimțământ
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3.4. Cookie-uri Funcționale</h3>
            <p>
              Permit site-ului să rețină alegerile tale (limbă, regiune, preferințe de personalizare) pentru o experiență îmbunătățită.
            </p>
            <div className="bg-card/30 border border-border/40 rounded-lg p-4 my-4">
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><strong>user_preferences:</strong> Preferințe utilizator (12 luni)</li>
                <li><strong>wishlist:</strong> Produse favorite (30 zile)</li>
              </ul>
              <p className="text-xs mt-3 text-muted-foreground">
                <strong>Temei legal:</strong> Consimțământ
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">4. Cookie-uri Terțe Părți</h2>
            <p>
              Pe lângă cookie-urile noastre (first-party), folosim și cookie-uri de la partenerii noștri (third-party):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Shopify:</strong> Pentru procesarea plăților și gestionarea comenzilor</li>
              <li><strong>Google Analytics:</strong> Pentru statistici anonimizate de trafic</li>
              <li><strong>Facebook/Meta:</strong> Pentru retargeting și măsurare ads</li>
              <li><strong>TikTok:</strong> Pentru campanii publicitare</li>
            </ul>
            <p className="mt-4">
              Aceste servicii pot seta propriile cookie-uri pe dispozitivul tău. Te rugăm să consulți politicile lor de confidențialitate pentru mai multe informații.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">5. Durata de Stocare</h2>
            <table className="w-full text-sm border border-border/40 rounded-lg overflow-hidden">
              <thead className="bg-card/50">
                <tr>
                  <th className="p-3 text-left">Tip Cookie</th>
                  <th className="p-3 text-left">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border/40">
                  <td className="p-3">Session cookies</td>
                  <td className="p-3">Până la închiderea browser-ului</td>
                </tr>
                <tr className="border-t border-border/40">
                  <td className="p-3">Persistent cookies (coș, preferințe)</td>
                  <td className="p-3">30 zile - 12 luni</td>
                </tr>
                <tr className="border-t border-border/40">
                  <td className="p-3">Analytics cookies</td>
                  <td className="p-3">24 ore - 2 ani</td>
                </tr>
                <tr className="border-t border-border/40">
                  <td className="p-3">Marketing cookies</td>
                  <td className="p-3">90 zile - 13 luni</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">6. Gestionarea Cookie-urilor</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">6.1. Banner Cookie-uri</h3>
            <p>
              La prima vizită pe site, vei vedea un banner care îți permite să:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accepți toate cookie-urile</li>
              <li>Refuzi cookie-urile non-esențiale</li>
              <li>Personalizezi preferințele tale (alegi ce categorii accepți)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.2. Modificarea Preferințelor</h3>
            <p>
              Poți modifica oricând preferințele tale despre cookie-uri:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Click pe link-ul "Cookie Settings" din footer</li>
              <li>Sau accesează setările browser-ului tău</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.3. Setări Browser</h3>
            <p>
              Majoritatea browser-elor îți permit să:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vizualizezi și ștergi cookie-urile existente</li>
              <li>Blochezi cookie-uri third-party</li>
              <li>Blochezi toate cookie-urile (atenție: site-ul poate să nu funcționeze corect)</li>
              <li>Ștergi automat cookie-urile la închiderea browser-ului</li>
            </ul>

            <p className="mt-4">
              <strong>Instrucțiuni pentru browser-ele populare:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">7. Do Not Track (DNT)</h2>
            <p>
              Unele browser-e au o funcție "Do Not Track" (DNT). În prezent, nu există un standard industrie pentru cum ar trebui să răspundem la semnalele DNT. Până când există un astfel de standard, nu răspundem automat la semnalele DNT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">8. Actualizări ale Politicii</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această Politică de Cookie-uri pentru a reflecta modificările în tehnologie sau legislație. Orice modificări vor fi publicate pe această pagină cu data actualizării.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">9. Întrebări și Contact</h2>
            <p>
              Pentru întrebări despre utilizarea cookie-urilor:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:privacy@wavely.ro" className="text-primary hover:underline">privacy@wavely.ro</a><br />
              Sau vezi <a href="/privacy-policy" className="text-primary hover:underline">Politica de Confidențialitate</a> pentru mai multe detalii
            </p>
          </section>

          <div className="border-t border-border/40 pt-6 mt-8">
            <p className="text-sm text-center">
              Continuarea utilizării site-ului nostru după afișarea banner-ului de cookie-uri constituie acceptarea utilizării cookie-urilor conform acestei politici.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
