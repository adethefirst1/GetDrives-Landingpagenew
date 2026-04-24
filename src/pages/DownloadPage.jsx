import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { STORE_URL_APPLE, STORE_URL_GOOGLE_PLAY } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";

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
                <img
                  src="/app-store-icon.png"
                  alt=""
                  aria-hidden
                  className="h-6 w-6 shrink-0 object-contain"
                />
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
                <img
                  src="/google-play-icon.png"
                  alt=""
                  aria-hidden
                  className="h-6 w-6 shrink-0 object-contain"
                />
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
