const steps = [
  {
    n: "01",
    title: "DOWNLOAD THE DRIVER APP",
    body: "Install the GetDrives partner app from the App Store or Google Play—it's where you'll register and manage everything.",
  },
  {
    n: "02",
    title: "REGISTER YOUR DETAILS",
    body: "Enter your personal information and vehicle details in the driver app—your driver profile starts here.",
  },
  {
    n: "03",
    title: "GET APPROVED",
    body: "Our team reviews your application within 48-72 hours and sends your approval.",
  },
  {
    n: "04",
    title: "GO ONLINE & ACCEPT TRIPS",
    body: "Once approved, switch on in the app and start receiving trip requests right away.",
  },
];

export default function StepsSection() {
  return (
    <section id="driver-steps" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-left text-xs font-semibold uppercase tracking-[0.25em] text-[#A04020]">
          GETTING STARTED
        </p>
        <h2 className="mt-4 max-w-5xl text-left font-extrabold uppercase leading-[0.92] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
          <span className="block">START DRIVING</span>
          <span className="block">IN 4 STEPS.</span>
        </h2>

        <div className="mt-8 border border-white/10 p-6 md:mt-10 md:p-8 lg:p-10">
          <div className="grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12">
            {steps.map((step) => (
              <div key={step.n} className="text-left">
                <p className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-none tracking-tight text-[#4A2C1F]">
                  {step.n}
                </p>
                <div className="mt-3 h-px w-10 bg-brand-orange" aria-hidden />
                <h3 className="mt-5 font-bold uppercase leading-tight tracking-tight text-base text-white md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#808080]">
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
