import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams, Link, useNavigate } from "react-router-dom";
import { phoneModels } from "@/data/configuratorData";
import { normalizeModelImage, buildFallbackSvg } from "@/lib/image";

const PhoneModelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const model = phoneModels.find((m) => m.id === id);

  if (!model) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container px-4 md:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Modelul nu a fost găsit</h1>
          <p className="text-muted-foreground mb-6">Verifică linkul sau alege din catalog.</p>
          <Link to="/phones" className="inline-block"><Button>Înapoi la catalog</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const specs = model.specs || {};

  const handleCustomize = () => {
    navigate(`/customize?model=${model.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="container px-4 md:px-8 py-10 md:py-14">
        <header className="mb-8">
          <h1 className="title-text text-4xl md:text-6xl font-black font-poppins tracking-tight">
            <span className="bg-gradient-accent-soft bg-clip-text text-transparent">{model.name}</span>
          </h1>
          <p className="text-muted-foreground">{model.brand} · {model.releaseYear || "—"}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-2 border-border/40 bg-card/60 backdrop-blur-sm">
            <div className="aspect-square bg-muted">
              <img src={normalizeModelImage(model.image)} alt={`${model.name} image`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = buildFallbackSvg(model.name); }} />
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 border-2 border-border/40 bg-card/60 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">Specificații tehnice</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {specs.display && <li><span className="font-medium">Display:</span> {specs.display}</li>}
                {specs.dimensions && <li><span className="font-medium">Dimensiuni:</span> {specs.dimensions}</li>}
                {specs.weight && <li><span className="font-medium">Greutate:</span> {specs.weight}</li>}
                {specs.chipset && <li><span className="font-medium">Chipset:</span> {specs.chipset}</li>}
                {specs.ram && <li><span className="font-medium">RAM:</span> {specs.ram}</li>}
                {specs.storage && <li><span className="font-medium">Stocare:</span> {specs.storage}</li>}
                {specs.battery && <li><span className="font-medium">Baterie:</span> {specs.battery}</li>}
                {specs.camera && <li><span className="font-medium">Cameră:</span> {specs.camera}</li>}
                {typeof specs.wirelessCharging !== "undefined" && (
                  <li><span className="font-medium">Încărcare wireless:</span> {specs.wirelessCharging ? "Da" : "Nu"}</li>
                )}
                {typeof specs.magSafe !== "undefined" && (
                  <li><span className="font-medium">MagSafe:</span> {specs.magSafe ? "Da" : "Nu"}</li>
                )}
              </ul>
            </Card>

            <Card className="p-6 border-2 border-border/40 bg-card/60 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">Opțiuni de personalizare</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Materiale disponibile</p>
                  <div className="flex flex-wrap gap-2">
                    {model.customizations?.materials?.map((mat) => (
                      <Badge key={mat} variant="outline">{mat}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Stiluri de jantă</p>
                  <div className="flex flex-wrap gap-2">
                    {model.customizations?.rimStyles?.map((rim) => (
                      <Badge key={rim} variant="secondary">{rim}</Badge>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Gravură disponibilă: {model.customizations?.engravingAvailable ? "Da" : "Nu"}
                </div>
              </div>
            </Card>

            <div className="flex gap-3">
              <Button onClick={handleCustomize} className="flex-1">Personalizează acest model</Button>
              <Link to="/phones" className="flex-1"><Button variant="outline" className="w-full">Înapoi la catalog</Button></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PhoneModelDetail;
