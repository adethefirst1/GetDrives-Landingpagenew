import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RouteFallback from "./components/RouteFallback";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DriveWithUsPage = lazy(() => import("./pages/DriveWithUsPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));

export default function App() {
  return (
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
      </Routes>
    </Suspense>
  );
}
