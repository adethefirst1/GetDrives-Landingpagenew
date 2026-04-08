import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { STORE_URL_APPLE, STORE_URL_GOOGLE_PLAY } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";

function IconAppStore({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function IconGooglePlay({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M1.22 0c-.03.093-.06.185-.06.308v23.384c0 .123.03.215.06.308l12.297-11.955L1.22 0zm12.676 13.26L24 24V0l-10.104 13.26zM13.69 11.998L1.804.08.06.077C.02.113 0 .18 0 .256v23.488c0 .075.02.142.06.179l1.744-.003L13.69 11.998z" />
    </svg>
  );
}

export default function DownloadPage() {
  useDocumentTitle(DOCUMENT_TITLES.download);

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
              GET THE APP
            </p>
            <h1 className="mt-4 max-w-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2rem,6vw,3.5rem)]">
              DOWNLOAD GETDRIVES
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-gray">
              Install on iOS or Android. Set your fare, compare driver offers, and
              book rides or delivery in one place.
            </p>
            <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center">
              <a
                href={STORE_URL_APPLE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 sm:w-auto"
                onClick={() =>
                  trackEvent("cta_download_click", { platform: "ios" })
                }
              >
                <IconAppStore className="h-6 w-6 shrink-0" />
                APP STORE
              </a>
              <a
                href={STORE_URL_GOOGLE_PLAY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-md border border-white bg-transparent px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:bg-white/5 sm:w-auto"
                onClick={() =>
                  trackEvent("cta_download_click", { platform: "android" })
                }
              >
                <IconGooglePlay className="h-6 w-6 shrink-0" />
                GOOGLE PLAY
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="home" />
    </div>
  );
}
