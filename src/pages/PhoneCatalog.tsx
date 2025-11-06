import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { phoneModels } from "@/data/configuratorData";
import { normalizeModelImage, buildFallbackSvg } from "@/lib/image";
import { PhoneModel } from "@/types/configurator";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PhoneCatalog = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("releaseYear-desc");

  const brands = useMemo(() => {
    const s = new Set<string>();
    phoneModels.forEach((m) => s.add(m.brand));
    return Array.from(s).sort();
  }, []);

  const years = useMemo(() => {
    const s = new Set<number>();
    phoneModels.forEach((m) => m.releaseYear && s.add(m.releaseYear));
    return Array.from(s).sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    let list: PhoneModel[] = phoneModels;
    if (brand !== "all") list = list.filter((m) => m.brand === brand);
    if (year !== "all") list = list.filter((m) => String(m.releaseYear) === year);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (m) => m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q) || m.brand.toLowerCase().includes(q)
      );
    }

    const [key, dir] = sortBy.split("-");
    list = [...list].sort((a, b) => {
      let va: any = a[key as keyof PhoneModel];
      let vb: any = b[key as keyof PhoneModel];
      if (key === "brand" || key === "name") {
        va = String(va || "").toLowerCase();
        vb = String(vb || "").toLowerCase();
        return dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      }
      if (key === "releaseYear" || key === "price") {
        va = Number(va || 0);
        vb = Number(vb || 0);
        return dir === "asc" ? va - vb : vb - va;
      }
      return 0;
    });

    return list;
  }, [brand, year, search, sortBy]);

  const gridCols = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="container px-4 md:px-8 py-10 md:py-14">
        <header className="text-center mb-8 md:mb-10">
          <h1 className="title-text text-4xl md:text-6xl font-black font-poppins tracking-tight">
            <span className="bg-gradient-accent-soft bg-clip-text text-transparent">Phone Catalog</span>
          </h1>
          <p className="text-muted-foreground mt-3">Explorează modele din branduri populare și alege perfect fit.</p>
        </header>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6">
          <div className="md:col-span-2">
            <Input
              placeholder="Caută după nume/model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12"
            />
          </div>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger className="h-12"><SelectValue placeholder="Brand" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toate brandurile</SelectItem>
              {brands.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="h-12"><SelectValue placeholder="An" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toți anii</SelectItem>
              {years.map((y) => (
                <SelectItem key={y} value={String(y)}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="md:col-span-2 flex items-center gap-3">
            <Badge variant="secondary">{filtered.length} modele</Badge>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="h-12"><SelectValue placeholder="Sortare" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="releaseYear-desc">An (desc)</SelectItem>
              <SelectItem value="releaseYear-asc">An (asc)</SelectItem>
              <SelectItem value="price-asc">Preț (asc)</SelectItem>
              <SelectItem value="price-desc">Preț (desc)</SelectItem>
              <SelectItem value="brand-asc">Brand (A→Z)</SelectItem>
              <SelectItem value="brand-desc">Brand (Z→A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        <div className={gridCols}>
          {filtered.map((m) => (
            <Card key={m.id} className="overflow-hidden border-2 border-border/40 bg-card/60 backdrop-blur-sm">
              <Link to={`/phones/${m.id}`} className="block">
                <div className="aspect-square bg-muted">
                  <img
                    src={normalizeModelImage(m.image)}
                    alt={`${m.name} image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = buildFallbackSvg(m.name); }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{m.name}</h3>
                    {m.price && <span className="text-sm text-muted-foreground">${m.price}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{m.brand} · {m.releaseYear || "—"}</p>
                  <div className="mt-4 flex gap-2">
                    <Badge variant="outline">Personalizare disponibilă</Badge>
                    {m.specs?.wirelessCharging && <Badge variant="outline">Wireless</Badge>}
                  </div>
                  <div className="mt-5">
                    <Button className="w-full">Vezi detalii</Button>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PhoneCatalog;
