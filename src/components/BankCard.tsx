import { Check, X, ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Bank, featureLabels } from "@/data/banks";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 Bitcoin-friendly rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-primary text-primary"
              : "fill-muted text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

export function BankCard({ bank }: { bank: Bank }) {
  const featureKeys = Object.keys(bank.features) as (keyof Bank["features"])[];

  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight truncate">{bank.name}</h3>
            <p className="text-sm text-muted-foreground">{bank.tagline}</p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {bank.type}
          </Badge>
        </div>
        <div className="flex items-center justify-between pt-2">
          <Stars rating={bank.rating} />
          <Badge variant="outline" className="font-normal">
            {bank.region}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 gap-4">
        <p className="text-sm leading-relaxed text-foreground/80">
          {bank.description}
        </p>

        <ul className="space-y-1.5">
          {featureKeys.map((key) => {
            const enabled = bank.features[key];
            return (
              <li key={key} className="flex items-center gap-2 text-sm">
                {enabled ? (
                  <Check className="h-4 w-4 text-green-600 dark:text-green-500 shrink-0" />
                ) : (
                  <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                )}
                <span className={enabled ? "" : "text-muted-foreground/60 line-through"}>
                  {featureLabels[key]}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-2 space-y-3">
          <div className="rounded-lg bg-accent/60 px-3 py-2">
            <p className="text-xs font-medium text-accent-foreground">
              <span className="font-semibold">Best for: </span>
              {bank.bestFor}
            </p>
          </div>
          <Button asChild className="w-full">
            <a href={bank.website} target="_blank" rel="noopener noreferrer">
              Visit {bank.name}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
