import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PATH_DRIVE_WITH_US } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import Logo from "./Logo";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const inactive = "text-white hover:text-brand-orange";
const linkClass = ({ isActive }) =>
  `whitespace-nowrap uppercase transition-colors ${
    isActive ? "text-brand-orange" : inactive
  }`;

const mobileLinkClass = ({ isActive }) =>
  `flex min-h-[48px] w-full items-center uppercase transition-colors ${
    isActive ? "text-brand-orange" : inactive
  } text-sm font-semibold tracking-[0.2em]`;

function HamburgerIcon({ open }) {
  return (
    <svg
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
}

export default function Navbar() {
  const m = useAccessibleMotion();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointer = (e) => {
      const t = e.target;
      if (
        panelRef.current?.contains(t) ||
        buttonRef.current?.contains(t)
      ) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/60 backdrop-blur-md">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="relative z-[60] mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="relative z-10 shrink-0"
          aria-label="GetDrives home"
          onClick={() => trackEvent("nav_click", { label: "HOME" })}
        >
          <Logo />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-8 text-[11px] font-semibold tracking-[0.2em] md:flex"
          aria-label="Primary"
        >
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => trackEvent("nav_click", { label: "HOME" })}
          >
            HOME
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() => trackEvent("nav_click", { label: "SERVICES" })}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/drive-with-us"
            className={linkClass}
            onClick={() => trackEvent("nav_click", { label: "DRIVE_WITH_US" })}
          >
            DRIVE WITH US
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => trackEvent("nav_click", { label: "ABOUT" })}
          >
            ABOUT
          </NavLink>
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <MotionLink
            to={PATH_DRIVE_WITH_US}
            className="relative hidden rounded-md bg-brand-orange px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white hover:opacity-95 md:inline-flex"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("cta_drive_click")}
          >
            START EARNING
          </MotionLink>

          <button
            ref={buttonRef}
            type="button"
            className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md text-white md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu-panel"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((o) => !o)}
          >
            <HamburgerIcon open={isOpen} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              aria-hidden
              onClick={close}
            />
            <motion.nav
              key="mobile-menu-panel"
              id="mobile-menu-panel"
              ref={panelRef}
              role="navigation"
              aria-label="Primary mobile"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#0B0B0B] md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
                <NavLink
                  to="/"
                  end
                  className={mobileLinkClass}
                  onClick={() => {
                    trackEvent("nav_click", { label: "HOME" });
                    close();
                  }}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/services"
                  className={mobileLinkClass}
                  onClick={() => {
                    trackEvent("nav_click", { label: "SERVICES" });
                    close();
                  }}
                >
                  SERVICES
                </NavLink>
                <NavLink
                  to="/drive-with-us"
                  className={mobileLinkClass}
                  onClick={() => {
                    trackEvent("nav_click", { label: "DRIVE_WITH_US" });
                    close();
                  }}
                >
                  DRIVE WITH US
                </NavLink>
                <NavLink
                  to="/about"
                  className={mobileLinkClass}
                  onClick={() => {
                    trackEvent("nav_click", { label: "ABOUT" });
                    close();
                  }}
                >
                  ABOUT
                </NavLink>
                <MotionLink
                  to={PATH_DRIVE_WITH_US}
                  className="mt-2 flex min-h-[48px] w-full items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-bold uppercase tracking-wide text-white hover:opacity-95"
                  {...m.buttonHoverProps}
                  onClick={() => {
                    trackEvent("cta_drive_click");
                    close();
                  }}
                >
                  START EARNING
                </MotionLink>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
