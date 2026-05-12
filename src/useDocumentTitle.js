import { useEffect } from "react";

/** SEO-friendly document titles per route */
export const DOCUMENT_TITLES = {
  home: "Set Your Fare, Choose Your Ride | GetDrives",
  services: "Ride & Delivery Services | GetDrives",
  driveWithUs: "Earn as a Driver | GetDrives",
  about: "About GetDrives",
  download: "Download the GetDrives App",
  blog: "Newsroom | GetDrives",
  careers: "Careers | GetDrives",
};

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
