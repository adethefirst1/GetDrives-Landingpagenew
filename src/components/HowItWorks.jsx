const steps = [
  {
    n: "01",
    title: "SET YOUR DESTINATION",
    body: "Open the app, enter where you're going, and propos the fare you're comfortable paying. You're in charg from the start.",
  },
  {
    n: "02",
    title: "CHOOSE YOUR DRIVER",
    body: "Nearby drivers accept or counter-offer. You see their rating, vehicle, and ETA before you confirm. Pick the one that works for you.",
  },
  {
    n: "03",
    title: "RIDE & PAY SEAMLESSLY",
    body: "Your driver arrives, you ride. Payment is settled in-app, cash or card. Rate the experience when you arrive.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 max-w-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2rem,5vw,3.5rem)]">
            <span className="block">THREE STEPS.</span>
            <span className="block">ZERO HASSLE.</span>
          </h2>
        </div>

        <div className="mt-8 border border-white/10 p-6 md:mt-10 md:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.n} className="text-left">
                <p className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-tight text-[#4A2C1F]">
                  {step.n}
                </p>
                <div className="mt-3 h-px w-10 bg-brand-orange" aria-hidden />
                <h3 className="mt-5 font-bold uppercase leading-tight tracking-tight text-white text-base md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
