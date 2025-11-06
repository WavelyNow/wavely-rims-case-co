import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Menu, ChevronRight } from "lucide-react";

type LegalLayoutProps = {
  title: string;
  htmlRaw: string;
};

// Simple slugify for heading IDs
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function LegalLayout({ title, htmlRaw }: LegalLayoutProps) {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Parse HTML once, add IDs to headings and build TOC
  const { processedHtml, toc } = useMemo(() => {
    try {
      const dom = new DOMParser().parseFromString(htmlRaw, "text/html");
      // Promote bold paragraph titles to real headings for better hierarchy
      const strongParas = Array.from(dom.querySelectorAll("p > strong"));
      strongParas.forEach((strong) => {
        const parentP = strong.parentElement as HTMLElement | null;
        if (!parentP) return;
        const text = strong.textContent?.trim() || "";
        // Only treat as a heading when the paragraph contains ONLY the strong element
        const onlyStrong = parentP.childElementCount === 1 && (parentP.textContent?.trim() === text);
        if (!onlyStrong) return;
        const skipPhrases = [
          "Effective Date",
          "Business Owner",
          "Trading as",
          "Business Type",
          "Business Address",
          "Email",
          "Currency",
        ];
        if (skipPhrases.some((p) => text.includes(p))) return;
        const h2 = dom.createElement("h2");
        h2.textContent = text;
        const id = slugify(text);
        h2.setAttribute("id", id);
        parentP.replaceWith(h2);
      });

      const headings = Array.from(dom.querySelectorAll("h1, h2, h3"));
      const tocItems: { id: string; text: string; level: number }[] = [];
      headings.forEach((h) => {
        const text = h.textContent?.trim() || "";
        if (!text) return;
        const id = slugify(text);
        h.setAttribute("id", id);
        const level = h.tagName === "H1" ? 1 : h.tagName === "H2" ? 2 : 3;
        if (level > 1) {
          tocItems.push({ id, text, level });
        }
      });
      const article = dom.querySelector("article") || dom.body;
      const processed = article.innerHTML;
      return { processedHtml: processed, toc: tocItems };
    } catch (e) {
      return { processedHtml: htmlRaw, toc: [] as { id: string; text: string; level: number }[] };
    }
  }, [htmlRaw]);

  useEffect(() => {
    // Close mobile TOC when navigating to an anchor
    const handler = () => setMobileTocOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4">
        {/* Hero */}
        <section className="py-10 md:py-14 border-b border-border/40">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground mt-2">Ultima actualizare: {new Date().toLocaleDateString()}</p>
        </section>

        {/* Layout with TOC */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8">
          {/* TOC - Desktop */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24 rounded-lg border border-border/40 bg-card p-4">
              <p className="text-sm font-semibold mb-3">Navigare</p>
              <nav aria-label="Navigare secțiuni" className="space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`group flex items-center gap-2 text-sm transition-smooth hover:text-primary ${
                      item.level === 2 ? "pl-0" : "pl-4 opacity-80"
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="md:col-span-9">
            {/* Mobile TOC */}
            {toc.length > 0 && (
              <div className="md:hidden mb-4">
                <button
                  className="flex items-center gap-2 w-full justify-between rounded-lg border border-border/40 bg-card px-4 py-2 text-sm"
                  onClick={() => setMobileTocOpen((v) => !v)}
                  aria-expanded={mobileTocOpen}
                  aria-controls="legal-mobile-toc"
                >
                  <span className="flex items-center gap-2">
                    <Menu className="h-4 w-4" />
                    Navigare secțiuni
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${mobileTocOpen ? "rotate-90" : "rotate-0"}`} />
                </button>
                {mobileTocOpen && (
                  <nav id="legal-mobile-toc" className="mt-2 space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-smooth hover:text-primary ${
                          item.level === 2 ? "pl-0" : "pl-4 opacity-80"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                )}
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-poppins prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-li:leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: processedHtml }} />
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
