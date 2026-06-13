import { Flame, Dumbbell, UtensilsCrossed, Check } from "lucide-react";

const foods = ["Rice", "Eggs", "Beans", "Chicken", "Oats"];

const meals = [
  { time: "Breakfast", name: "Oats + boiled eggs", kcal: 380 },
  { time: "Lunch", name: "Jollof rice, grilled chicken", kcal: 540 },
  { time: "Dinner", name: "Beans porridge", kcal: 420 },
];

const moves = ["Squats", "Push-ups", "Plank", "Glute bridge"];

export function ProductMockup() {
  return (
    <div className="relative w-full max-w-[460px] [perspective:1600px] mt-10 lg:mt-0">
      {/* Soft halo */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(45,122,84,0.15)_0%,transparent_70%)] blur-2xl"
      />

      <div className="relative rounded-[1.5rem] bg-white shadow-[0_30px_80px_-30px_rgba(17,17,17,0.15),0_8px_24px_-12px_rgba(17,17,17,0.08)] ring-1 ring-black/5 overflow-hidden lg:[transform:rotateY(-6deg)_rotateX(2deg)] origin-center transition-transform duration-700 hover:[transform:rotateY(0deg)_rotateX(0deg)] will-change-transform">
        
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-black/5 bg-[#F9F4EC]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="mx-auto -mt-0.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#888888] ring-1 ring-[#E8E8E4] shadow-sm">
            chop2shape.app
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Goal header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#888888]">
                Today's plan
              </p>
              <p className="font-serif text-2xl font-bold leading-tight mt-1 text-[#1A1A1A]">
                Goal — Lose belly fat
              </p>
            </div>
            <div className="relative h-14 w-14">
              <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" className="stroke-[#F0EFEB]" strokeWidth="3" />
                <circle cx="18" cy="18" r="15.5" fill="none" className="stroke-[#2D7A54]" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="29" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 grid place-items-center text-[11px] font-bold text-[#1A1A1A]">
                70%
              </span>
            </div>
          </div>

          {/* Food chips */}
          <div>
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#888888]">
              Foods in your kitchen
            </p>
            <div className="flex flex-wrap gap-2">
              {foods.map((f) => (
                <span key={f} className="rounded-full bg-[#F9F4EC] px-3 py-1.5 text-xs text-[#1A1A1A] ring-1 ring-[#E8E8E4]">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Meal panel */}
          <div className="rounded-xl bg-[#F9F4EC] ring-1 ring-[#E8E8E4] p-4">
            <div className="mb-3 flex items-center gap-2">
              <UtensilsCrossed className="h-4 w-4 text-[#2D7A54]" />
              <p className="text-xs font-bold tracking-wide text-[#1A1A1A]">Meal plan</p>
              <span className="ml-auto text-[10px] font-medium text-[#888888]">
                1,340 kcal
              </span>
            </div>
            <ul className="space-y-2.5">
              {meals.map((m) => (
                <li key={m.time} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-[#888888]">
                    {m.time}
                  </span>
                  <span className="flex-1 text-sm font-medium text-[#1A1A1A]">
                    {m.name}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#888888] ring-1 ring-black/5 shadow-sm">
                    {m.kcal} kcal
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workout panel */}
          <div className="rounded-xl bg-[#F9F4EC] ring-1 ring-[#E8E8E4] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Dumbbell className="h-4 w-4 text-[#2D7A54]" />
              <p className="text-xs font-bold tracking-wide text-[#1A1A1A]">
                20-min home workout
              </p>
              <span className="ml-auto rounded-full bg-[#2D7A54]/10 px-2.5 py-1 text-[10px] font-bold text-[#1B4D34]">
                No equipment
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {moves.map((m) => (
                <div key={m} className="flex items-center gap-2 rounded-full bg-white px-2.5 py-2 text-xs font-medium text-[#1A1A1A] ring-1 ring-black/5 shadow-sm">
                  <Check className="h-3.5 w-3.5 text-[#2D7A54]" strokeWidth={3} />
                  <span>{m}</span>
                  <span className="ml-auto text-[10px] font-bold text-[#888888]">
                    3x12
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA inside mockup */}
          <div className="flex items-center justify-between pt-2">
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-[#666666]">
              <Flame className="h-3.5 w-3.5 text-[#2D7A54]" />
              On track to lose ~ 0.5 kg this week
            </p>
            <span className="rounded-full bg-[#1A1A1A] px-4 py-2 text-[11px] font-bold text-white shadow-md">
              Generate today
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}