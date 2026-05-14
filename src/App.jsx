import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RouteFallback from "./components/RouteFallback";
import ErrorBoundary from "./components/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DriveWithUsPage = lazy(() => import("./pages/DriveWithUsPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <ErrorBoundary>
      {/* <button onClick={() => { throw new Error("Sentry Test Error"); }} style={{position: 'absolute', zIndex: 9999, top: 0, left: 0}}>Test Sentry</button> */}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/drive-with-us" element={<DriveWithUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
