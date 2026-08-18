import { useEffect } from "react";

/** SEO-friendly document titles per route */
export const DOCUMENT_TITLES = {
  home: "Set Your Fare, Choose Your Ride | GetDrives",
  services: "Ride & Delivery Services | GetDrives",
  driveWithUs: "Join the Driver Waitlist | GetDrives",
  about: "About GetDrives",
  faq: "FAQ | GetDrives",
  download: "Download the GetDrives App",
  blog: "Newsroom | GetDrives",
  careers: "Careers | GetDrives",
};

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
