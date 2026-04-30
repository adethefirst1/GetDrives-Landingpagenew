import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";

export default function CookiePolicyPage() {
  useDocumentTitle("Cookie Policy | GetDrives");
  const m = useAccessibleMotion();

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content" className="py-16 md:py-24">
        <motion.div 
          className="mx-auto max-w-3xl px-6"
          {...m.heroTextBlock}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-orange" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              LEGAL
            </p>
          </div>
          
          <h1 className="mb-8 font-extrabold leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-white">
            Cookie Policy
          </h1>
          
          <div className="prose prose-invert prose-brand prose-p:leading-relaxed prose-li:leading-relaxed max-w-none text-brand-gray/80">
            <p className="font-semibold text-white">Effective Date: April 15, 2026</p>

            <h2 className="mt-12 mb-4 text-xl font-bold uppercase tracking-wide text-white">1. WHAT ARE COOKIES</h2>
            <p>
              Cookies are small text files stored on your device when you use the GetDrives app or website. Similar technologies include pixels, SDKs, and local storage.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">2. TYPES OF COOKIES</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Essential:</strong><br />
                Required for core functionality such as login, security, and fraud prevention.
              </li>
              <li>
                <strong>Performance:</strong><br />
                Used for analytics and improving performance (e.g., usage data, crash logs).
              </li>
              <li>
                <strong>Functionality:</strong><br />
                Used to remember preferences such as saved addresses and settings.
              </li>
              <li>
                <strong>Marketing:</strong><br />
                Used to show relevant promotions and measure ad performance.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">3. THIRD-PARTY COOKIES</h2>
            <p>
              We may allow trusted partners such as Google, Meta, Paystack, and AWS to set cookies. Their use is governed by their own privacy policies.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">4. COOKIE DURATION</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Session cookies expire when you close the app or browser.</li>
              <li>Persistent cookies may remain from 1 month to 2 years unless deleted.</li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">5. YOUR CHOICES</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manage cookies in-app under Settings &gt; Privacy</li>
              <li>Clear cookies via device or browser settings</li>
              <li>Opt out of analytics tools where applicable</li>
            </ul>
            <p className="mt-4 font-semibold text-brand-orange">
              Disabling essential cookies may prevent core features from working.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">6. CONSENT</h2>
            <p>We request consent before enabling non-essential cookies. You may withdraw consent at any time.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">7. CHANGES</h2>
            <p>We may update this policy. Continued use means acceptance.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">8. CONTACT</h2>
            <address className="not-italic">
              <strong>GetDrives Limited</strong><br />
              Suite D5, Mazado Plaza<br />
              Behind Julius Berger Yard<br />
              Utako, Abuja FCT, Nigeria<br />
              Email: <a href="mailto:hello@getdrives.com" className="text-brand-orange hover:underline">hello@getdrives.com</a>
            </address>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
