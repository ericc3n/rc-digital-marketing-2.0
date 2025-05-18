import type { Metadata } from "next";
import '@/sass/_global.scss';
import ThemeProvider from "@/context/ThemeProvider/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RC Digital Marketing",
  description: "Porta il Tuo Business al Livello Successivo",
  keywords: [
    "marketing digitale",
    "pubblicità online",
    "SEO",
    "social media",
    "campagne Google Ads",
    "RC Digital Marketing"
  ],
  icons: '/favicon.png',
  authors: [{ name: "RC Digital Marketing", url: "https://www.rcdigitalmarketing.it" }],
  openGraph : {
    title: "RC Digital Marketing",
    description: "Porta il tuo Business al Livello Successivo",
    url: "https://www.rcdigitalmarketing.it/",
    siteName: "RC Digital Marketing",
    images: [
      {
        url: "/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: 'RC Digital Marketing',
      },
    ],
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "tKVwGDE-kic32BET_0U2ZcP4oR6TQkpN_wYGlssbYs0",
  },
  metadataBase: new URL("https://www.rcdigitalmarketing.it"),
  alternates: {
    canonical: "/",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PQ60GR5023"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PQ60GR5023');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RC Digital Marketing",
              "url": "https://www.rcdigitalmarketing.it",
              "logo": "https://www.rcdigitalmarketing.it/favicon.png",
              "description": "RC Digital Marketing offre soluzioni digitali personalizzate per far crescere il tuo business online.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+39 327 951 4494",
                "contactType": "customer support",
                "areaServed": "IT",
                "availableLanguage": ["Italian", "English"]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61575681496577",
                "https://www.instagram.com/rc.digital_marketing/"
              ]
            }
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
