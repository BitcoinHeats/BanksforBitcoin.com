import { Bitcoin } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="relative overflow-hidden border-b bg-gradient-to-br from-primary/10 via-background to-background">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 text-center">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Bitcoin className="h-9 w-9" strokeWidth={2.25} />
          </div>
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Banks That Work Well With{" "}
          <span className="text-primary">Bitcoin</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          New to Bitcoin? Skip the confusion. Here's a simple, hand-picked list
          of banks and apps that won't freeze your account for buying Bitcoin —
          and make getting started easy.
        </p>
      </div>
    </header>
  );
}
