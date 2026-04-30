import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";

export default function PrivacyPolicyPage() {
  useDocumentTitle("Privacy Policy | GetDrives");
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-brand prose-p:leading-relaxed prose-li:leading-relaxed max-w-none text-brand-gray/80">
            <p className="font-semibold text-white">Effective Date: April 15, 2026</p>

            <h2 className="mt-12 mb-4 text-xl font-bold uppercase tracking-wide text-white">1. INTRODUCTION</h2>
            <p>
              GetDrives Limited ("GetDrives", "we", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">2. DATA CONTROLLER</h2>
            <p>
              GetDrives Limited is the data controller of your personal data.<br />
              Contact: <a href="mailto:hello@getdrives.com" className="text-brand-orange hover:underline">hello@getdrives.com</a>
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">3. DATA WE COLLECT</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, phone, email, profile photo</li>
              <li>Location data (GPS, IP)</li>
              <li>Trip history and device info</li>
              <li>Payment data</li>
              <li>ID verification (KYC)</li>
              <li>Emergency contact info</li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">4. PURPOSE OF PROCESSING</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide services and match users with providers</li>
              <li>Process payments</li>
              <li>Ensure safety and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">5. LEGAL BASIS</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consent</li>
              <li>Contract performance</li>
              <li>Legitimate interest</li>
              <li>Legal obligation</li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">6. DATA SHARING</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>With service providers for trip fulfillment</li>
              <li>Payment processors and cloud services</li>
              <li>Regulatory authorities when required</li>
            </ul>
            <p className="mt-4 text-white font-medium">We do not sell personal data.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">7. DATA RETENTION</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Trip data: up to 3 years</li>
              <li>KYC data: up to 5 years</li>
            </ul>
            <p className="mt-4">Users may request deletion subject to legal requirements.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">8. USER RIGHTS</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access and correct data</li>
              <li>Request deletion</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">9. SECURITY</h2>
            <p>
              We use encryption, access controls, and monitoring systems.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">10. INTERNATIONAL TRANSFERS</h2>
            <p>
              Data may be stored outside Nigeria with appropriate safeguards.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">11. CHANGES</h2>
            <p>
              We may update this policy periodically.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">12. CONTACT</h2>
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
