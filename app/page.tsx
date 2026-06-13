import { ProductMockup } from "@/components/landing/ProductMockup";
import { WaitlistForm } from "@/components/landing/WaitListForm";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#2D7A54]/20 selection:text-[#1A1A1A]">
      {/* Warm ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 10%, rgba(45, 122, 84, 0.08), transparent 70%), radial-gradient(50% 40% at 5% 95%, rgba(201, 162, 122, 0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-10 lg:py-7">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1A1A1A] text-white text-base font-bold">
              C
            </span>
            <span className="text-lg font-bold tracking-tight">
              Chop2Shape
            </span>
          </a>
          <span className="hidden items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs text-[#666666] ring-1 ring-black/5 shadow-sm sm:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#2D7A54] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2D7A54]" />
            </span>
            Launching soon · Lagos
          </span>
        </header>

        {/* Hero Section */}
        <section className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2D7A54]/10 px-3 py-1 text-xs font-semibold text-[#1B4D34] ring-1 ring-[#2D7A54]/20">
              Personalized fitness · Built around your kitchen
            </span>

            <h1 className="mt-6 font-serif text-[2rem] font-bold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[3.4rem]">
              Get fit using the food
              <br className="hidden sm:block" />{" "}
              <span className="italic text-[#2D7A54]">already in</span> your
              kitchen.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#555555] sm:text-lg">
              Chop2Shape turns the rice, beans, eggs and chicken you already
              have into a meal plan and home workout built for your goal - no
              gym, no expensive groceries.
            </p>

            <div className="mt-8">
              <WaitlistForm />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "bg-[#E8C4A0]",
                  "bg-[#C9A27A]",
                  "bg-[#A57E5C]",
                  "bg-[#7A5A42]",
                ].map((c, i) => (
                  <span
                    key={i}
                    className={`h-8 w-8 rounded-full ${c} ring-2 ring-[#FAF9F6]`}
                  />
                ))}
              </div>
              <p className="text-sm text-[#666666]">
                <span className="font-bold text-[#1A1A1A]">1,200+</span>{" "}
                already on the list
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProductMockup />
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-3 pt-4 text-xs font-medium text-[#888888]">
          <p>© {new Date().getFullYear()} Chop2Shape. Made for real kitchens.</p>
          <p className="flex items-center gap-4">
            <span className="hidden sm:inline">No spam, ever.</span>
            <span>Privacy-first.</span>
          </p>
        </footer>
      </div>
    </main>
  );
}