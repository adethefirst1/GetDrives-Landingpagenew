import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";

export default function TermsOfServicePage() {
  useDocumentTitle("Terms of Service | GetDrives");
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
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-brand prose-p:leading-relaxed prose-li:leading-relaxed max-w-none text-brand-gray/80">
            <p className="font-semibold text-white">Effective Date: April 15, 2026</p>

            <h2 className="mt-12 mb-4 text-xl font-bold uppercase tracking-wide text-white">1. INTRODUCTION</h2>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of the GetDrives Limited platform, including our mobile application, website, and related services (collectively, the “Platform”).<br />
              By creating an account or using the Platform, you agree to be bound by these Terms.<br />
              If you do not agree, you must not use the Platform.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">2. ABOUT GETDRIVES</h2>
            <p>
              GetDrives Limited (“GetDrives”, “we”, “us”, “our”) is a technology platform that connects users with independent third-party service providers offering mobility and logistics services.
            </p>
            <p className="font-semibold text-brand-orange">
              Important: GetDrives does not provide transportation or delivery services, does not own vehicles, and does not employ drivers or couriers.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">3. DEFINITIONS</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>User:</strong> any individual using the Platform</li>
              <li><strong>Service Provider:</strong> independent drivers or couriers</li>
              <li><strong>Services:</strong> ride-hailing and logistics</li>
              <li><strong>Ride:</strong> transportation service</li>
              <li><strong>Delivery:</strong> logistics service</li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">4. ELIGIBILITY</h2>
            <p>You must be at least 18 years old and provide accurate information.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">5. PLATFORM USE</h2>
            <p>You agree to lawful use, accurate details, and respectful behavior.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">6. NATURE OF SERVICE</h2>
            <p>GetDrives is an intermediary platform. Users contract directly with Service Providers.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">7. PRICING AND FEES</h2>
            <p>Includes base fare, distance, time, surge, and applicable fees.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">8. PAYMENTS</h2>
            <p>Payments may be via wallet, card, or cash. GetDrives may deduct commissions.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">9. CANCELLATIONS</h2>
            <p>Subject to applicable fees.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">10. PROHIBITED USE</h2>
            <p>No illegal or hazardous items.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">11. SAFETY</h2>
            <p>Follow laws and ensure safe conduct.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">12. TERMINATION</h2>
            <p>Accounts may be suspended for violations.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">13. INTELLECTUAL PROPERTY</h2>
            <p>All platform rights belong to GetDrives.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">14. LIMITATION OF LIABILITY</h2>
            <p>GetDrives is not liable for actions of service providers.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">15. DISCLAIMERS</h2>
            <p>Service provided “as is”.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">16. PRIVACY</h2>
            <p>Processed under NDPR.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">17. DISPUTES</h2>
            <p>Resolved under Nigerian law.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">18. GOVERNING LAW</h2>
            <p>Federal Republic of Nigeria.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">19. CHANGES</h2>
            <p>Terms may be updated.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">20. CONTACT</h2>
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
