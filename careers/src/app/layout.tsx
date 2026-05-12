import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { Toaster } from "sonner";

import { ourFileRouter } from "@/app/api/uploadthing/core";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://careers.getdrives.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Careers | GetDrives",
    template: "%s | GetDrives",
  },
  description:
    "Join GetDrives — peer-to-peer mobility for Nigeria. Open roles in growth and content. Execution-first culture, Lagos-first team.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "GetDrives",
    title: "Careers at GetDrives",
    description:
      "Help build transportation infrastructure for African cities. Growth and content roles — apply now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at GetDrives",
    description:
      "Peer-to-peer mobility startup hiring operators who ship — Nigeria.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
        <Toaster richColors position="top-center" theme="dark" closeButton />
      </body>
    </html>
  );
}
