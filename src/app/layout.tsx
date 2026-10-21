import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e65100",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://contatti-hotel-italia-cagliari.vercel.app"),
  title: {
    default: "Contatti Hotel Italia - Cagliari | Info e Prenotazioni",
    template: "%s | Hotel Italia Cagliari",
  },
  description:
    "Proposta dimostrativa indipendente per Hotel Italia Cagliari (3 stelle, dal 1928 nel quartiere Marina). A 300m dal porto e 500m dalla stazione. Camere, servizi, reception h24, colazione sarda, distanze e contatti diretti.",
  keywords: [
    "Hotel Italia Cagliari",
    "Contatti Hotel Italia",
    "Hotel 3 stelle Cagliari centro",
    "Hotel quartiere Marina Cagliari",
    "Hotel vicino porto Cagliari",
    "Hotel vicino stazione Cagliari",
    "Camere e suite Cagliari",
    "Convenzione traghetti Cagliari",
    "Hotel con reception 24 ore Cagliari"
  ],
  authors: [{ name: "Jarvis Web Proposal" }],
  creator: "Jarvis Coding Assistant",
  publisher: "Hotel Italia Co.s.s.a.t. s.p.a. (Proposta Indipendente)",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Contatti Hotel Italia - Cagliari | Info e Prenotazioni",
    description:
      "Accoglienza storica dal 1928 nel quartiere Marina di Cagliari. Reception h24, camere insonorizzate, a 300 metri dal porto e convenzione Traghetti Lines.",
    url: "/",
    siteName: "Hotel Italia Cagliari - Proposta Indipendente",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/og-hotel-italia.png",
        width: 1200,
        height: 630,
        alt: "Hotel Italia Cagliari - Accoglienza storica dal 1928 nel quartiere Marina",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contatti Hotel Italia - Cagliari | Info e Prenotazioni",
    description:
      "Accoglienza storica dal 1928 nel quartiere Marina di Cagliari. A 300 metri dal porto, reception h24 e miglior prezzo diretto garantito.",
    images: ["/images/og-hotel-italia.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
