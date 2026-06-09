import { useMemo, useState } from "react";
import { useSeoMeta } from "@unhead/react";
import { Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BankCard } from "@/components/BankCard";
import { banks, regions, type Region } from "@/data/banks";
import { cn } from "@/lib/utils";

type Filter = "All" | Region;

const Index = () => {
  useSeoMeta({
    title: "BanksforBitcoin.com — Find Bitcoin-Friendly Banks (Beginner Guide)",
    description:
      "A simple, beginner-friendly list of banks and apps that work well with Bitcoin. Find where you can safely buy Bitcoin and link your account without getting frozen.",
    ogTitle: "BanksforBitcoin.com",
    ogDescription:
      "Find banks and apps that work well with Bitcoin — a simple guide for newbies.",
  });

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...regions];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return banks.filter((bank) => {
      const matchesRegion =
        filter === "All" ||
        bank.region === filter ||
        (filter !== "Global" && bank.region === "Global");
      const matchesQuery =
        q === "" ||
        bank.name.toLowerCase().includes(q) ||
        bank.tagline.toLowerCase().includes(q) ||
        bank.description.toLowerCase().includes(q) ||
        bank.bestFor.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="container mx-auto flex-1 px-4 py-10 sm:py-12">
        {/* Search + filters */}
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name or feature…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 pl-12 text-base rounded-xl"
              aria-label="Search banks"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={cn("rounded-full", filter !== f && "bg-background")}
            >
              {f}
            </Button>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "option" : "options"}
          {filter !== "All" && (
            <>
              {" "}for <span className="font-semibold text-foreground">{filter}</span>
            </>
          )}
        </p>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((bank) => (
              <BankCard key={bank.id} bank={bank} />
            ))}
          </div>
        ) : (
          <Card className="mt-8 border-dashed">
            <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <SearchX className="h-10 w-10 text-muted-foreground/50" />
              <p className="max-w-sm text-muted-foreground">
                No banks match your search. Try a different keyword or region.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
              >
                Clear filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Beginner tip */}
        <section className="mx-auto mt-16 max-w-3xl">
          <Card className="bg-accent/40 border-primary/20">
            <CardContent className="py-6 px-6 sm:px-8">
              <h2 className="text-lg font-bold mb-2">New to Bitcoin? Start here</h2>
              <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground/80 leading-relaxed marker:font-semibold marker:text-primary">
                <li>
                  Pick a bank or app above that's available in your country.
                </li>
                <li>
                  Buy a small amount of Bitcoin first — just to learn how it works.
                </li>
                <li>
                  Once comfortable, move your Bitcoin to your own wallet
                  ("self-custody") so you truly control it.
                </li>
                <li>
                  Never invest more than you can afford to lose, and keep your
                  recovery phrase safe and private.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
