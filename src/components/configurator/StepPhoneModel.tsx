import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { phoneModels } from "@/data/configuratorData";
import { normalizeModelImage, buildFallbackSvg } from "@/lib/image";
import { PhoneModel } from "@/types/configurator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface StepPhoneModelProps {
  selectedModel: string;
  onSelect: (model: PhoneModel) => void;
}

const StepPhoneModel = ({ selectedModel, onSelect }: StepPhoneModelProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("releaseYear-desc");
  const [selectorOpen, setSelectorOpen] = useState<boolean>(false);

  // Keyboard shortcut: Ctrl+K opens Quick Select
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setSelectorOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Helper: highlight matched query within a text with accessible <mark>
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "ig");
    const lowerQuery = query.toLowerCase();
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === lowerQuery ? (
            <mark key={i} className="bg-primary/20 text-primary rounded px-0.5">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  const brands = useMemo(() => {
    const s = new Set<string>();
    phoneModels.forEach((m) => s.add(m.brand));
    return Array.from(s).sort();
  }, []);

  const filteredModels = useMemo(() => {
    let list = phoneModels.filter((model) =>
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (brandFilter !== "all") list = list.filter((m) => m.brand === brandFilter);
    return list;
  }, [searchTerm, brandFilter]);

  // Popularity ranking for 2025: brand order
  const BRAND_RANK: Record<string, number> = {
    "Apple iPhone": 1,
    "Samsung Galaxy": 2,
    "Xiaomi": 3,
    "Oppo": 4,
    "Huawei": 5,
    "OnePlus": 6,
    "Google Pixel": 7,
  };

  // Build brand buckets and interleave to avoid long blocks from the same brand
  const orderedModels = useMemo(() => {
    // Buckets per brand
    const buckets: Record<string, PhoneModel[]> = {};
    filteredModels.forEach((m) => {
      const b = m.brand;
      if (!buckets[b]) buckets[b] = [];
      buckets[b].push(m);
    });

    // Sort within brand according to sortBy (default: releaseYear desc)
    const [key, dir] = sortBy.split("-");
    Object.keys(buckets).forEach((b) => {
      buckets[b].sort((a, c) => {
        let va: any = a[key as keyof PhoneModel];
        let vb: any = c[key as keyof PhoneModel];
        if (key === "name") {
          va = String(va || "").toLowerCase();
          vb = String(vb || "").toLowerCase();
          return dir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
        }
        if (key === "releaseYear" || key === "price") {
          va = Number(va || 0);
          vb = Number(vb || 0);
          return dir === "asc" ? va - vb : vb - va;
        }
        // When sorting by brand in UI, keep within-brand by releaseYear desc
        const yA = Number(a.releaseYear || 0);
        const yB = Number(c.releaseYear || 0);
        return yB - yA;
      });
    });

    // Determine brand display order
    let brandOrder = Object.keys(buckets);
    if (key === "brand") {
      brandOrder.sort((a, b) =>
        dir === "asc"
          ? a.toLowerCase().localeCompare(b.toLowerCase())
          : b.toLowerCase().localeCompare(a.toLowerCase())
      );
    } else {
      brandOrder.sort((a, b) => (BRAND_RANK[a] || 99) - (BRAND_RANK[b] || 99));
    }

    // Interleave: take one from each bucket in brand order, cycling until empty
    const result: PhoneModel[] = [];
    let index = 0;
    while (true) {
      let pushed = false;
      for (const brand of brandOrder) {
        const item = buckets[brand][index];
        if (item) {
          result.push(item);
          pushed = true;
        }
      }
      if (!pushed) break;
      index++;
    }
    return result;
  }, [filteredModels, sortBy]);

  const popularBrand = (brand: string) =>
    brand === "Apple iPhone" || brand === "Samsung Galaxy" || brand === "Google Pixel";

  // Locked-in: when a model is selected, other cards become disabled until deselect.

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Step header */}
      <div className="text-center space-y-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Step 1 of 5</p>
        <h2 className="text-3xl md:text-4xl font-black font-poppins">Select Your Phone Model</h2>
        <p className="text-sm md:text-base text-muted-foreground">Use the quick selector below to find your exact device — no scrolling needed.</p>
      </div>

      {/* Brand chips – ascunse conform cerinței */}
      {false && (
        <div className="flex gap-2 overflow-x-auto py-2 -mx-1 px-1" aria-label="Filter by brand">
          <button
            onClick={() => setBrandFilter("all")}
            className={`px-3 py-2 rounded-full border text-sm whitespace-nowrap transition-smooth ${
              brandFilter === "all" ? "border-primary bg-primary/10 text-primary" : "border-border/40 bg-card hover:border-primary/40"
            }`}
            aria-pressed={brandFilter === "all"}
          >
            All
          </button>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setBrandFilter(b)}
              className={`px-3 py-2 rounded-full border text-sm whitespace-nowrap transition-smooth ${
                brandFilter === b ? "border-primary bg-primary/10 text-primary" : "border-border/40 bg-card hover:border-primary/40"
              }`}
              aria-pressed={brandFilter === b}
            >
              {b}
            </button>
          ))}
        </div>
      )}

      {/* Selection Panel */}
      <div className="space-y-4">
        {/* Hero-like selection card */}
        <div className="rounded-2xl border bg-gradient-to-br from-background via-card/70 to-card/60 backdrop-blur p-6 md:p-8 grid md:grid-cols-[1fr_260px] items-center gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Device Selection</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Find and choose your phone</h3>
            <p className="text-sm md:text-base text-muted-foreground">Search by brand or model. No scrolling needed — it’s fast and precise.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4" /> Perfect fit guaranteed</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Zap className="h-4 w-4" /> Latest devices supported</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Search className="h-4 w-4" /> Press Ctrl + K to search</div>
            </div>
          </div>
          <div className="flex md:justify-end">
            <Button type="button" variant="default" className="h-12 w-full md:w-auto" onClick={() => setSelectorOpen(true)}>
              Choose model
            </Button>
          </div>
        </div>

        {/* Dialog-based command palette */}
        <div className="flex">
          <Dialog open={selectorOpen} onOpenChange={setSelectorOpen}>
            <DialogTrigger asChild>
              <span />
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
              <DialogTitle>Select your phone model</DialogTitle>
              </DialogHeader>
              <Command>
              <CommandInput placeholder="Type a brand or model name..." />
              <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                {brands.map((b) => (
                  <CommandGroup key={b} heading={b}>
                    {phoneModels
                      .filter((m) => m.brand === b)
                      .sort((a, c) => Number(c.releaseYear || 0) - Number(a.releaseYear || 0))
                      .map((m) => (
                        <CommandItem
                          key={m.id}
                          onSelect={() => {
                            onSelect(m);
                            setSelectorOpen(false);
                          }}
                          className={selectedModel === m.id ? "bg-primary/10" : undefined}
                        >
                          <span className="truncate mr-2">{m.name}</span>
                          <span className="text-muted-foreground text-xs">{m.releaseYear ? `• ${m.releaseYear}` : ""}</span>
                        </CommandItem>
                      ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </Command>
          </DialogContent>
        </Dialog>
        </div>
      </div>

      {/* Search & sort – ascunse, păstrăm doar meniul rapid */}
      {false && (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Search phone models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-input/50 border-border/40"
              aria-label="Search phone models"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="h-12"><SelectValue placeholder="Sort" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="releaseYear-desc">Year (desc)</SelectItem>
              <SelectItem value="releaseYear-asc">Year (asc)</SelectItem>
              <SelectItem value="price-asc">Price (asc)</SelectItem>
              <SelectItem value="price-desc">Price (desc)</SelectItem>
              <SelectItem value="brand-asc">Brand (A→Z)</SelectItem>
              <SelectItem value="brand-desc">Brand (Z→A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Phone Models Grid – eliminat; selecția se face din meniul rapid */}
      {false && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {orderedModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => onSelect(model)}
                    className={`relative p-4 md:p-5 rounded-2xl border-2 transition-smooth text-left hover:shadow-premium hover:bg-card/80 active:scale-[0.98] active:bg-primary/15 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none ${
                      selectedModel === model.id
                        ? "border-primary bg-primary/10 shadow-premium ring-2 ring-primary/40"
                        : "border-border/40 bg-card/60 hover:border-primary/50"
                    }`}
                    aria-pressed={selectedModel === model.id}
                    aria-disabled={!!selectedModel && selectedModel !== model.id}
                    disabled={!!selectedModel && selectedModel !== model.id}
                    style={!!selectedModel && selectedModel !== model.id ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
                  >
                    {popularBrand(model.brand) && model.releaseYear >= 2024 && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary/20 text-secondary border border-secondary/40">
                        Popular
                      </span>
                    )}
                    <div className="flex items-center gap-4">
                      <img
                        src={normalizeModelImage(model.image)}
                        alt={model.name}
                        className="w-14 h-14 object-cover rounded"
                        referrerPolicy="no-referrer"
                        crossOrigin="anonymous"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        onError={(e) => { e.currentTarget.src = buildFallbackSvg(model.name); }}
                      />
                      <div className="min-w-0">
                        <div className="text-base md:text-lg font-semibold break-words whitespace-normal leading-normal">
                          {highlightText(model.name, searchTerm)}
                        </div>
                        <div className="text-xs text-muted-foreground">{model.brand}{model.releaseYear ? ` • ${model.releaseYear}` : ""}</div>
                      </div>
                    </div>
                  </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Model Display */}
      {selectedModel && (
        <div className="rounded-xl border-2 border-primary/30 bg-card/60 backdrop-blur p-4 md:p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Selected Model</p>
          <div className="flex items-center gap-4">
            <img
              src={normalizeModelImage(phoneModels.find((m) => m.id === selectedModel)?.image || "")}
              alt="Selected"
              className="w-14 h-14 object-cover rounded"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onError={(e) => { const m = phoneModels.find((x) => x.id === selectedModel); e.currentTarget.src = buildFallbackSvg(m?.name || "Selected"); }}
            />
            <span className="text-base md:text-lg font-semibold font-poppins">
              {phoneModels.find((m) => m.id === selectedModel)?.name}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">You can change this anytime using Quick Select or by deselecting below.</span>
            {(() => {
              const selected = phoneModels.find((m) => m.id === selectedModel);
              return selected ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => onSelect(selected)}
                  className="h-8 px-3 border-primary/40 hover:border-primary text-xs"
                >
                  Deselect
                </Button>
              ) : null;
            })()}
          </div>
        </div>
      )}

    </div>
  );
};

export default StepPhoneModel;
