import type { Metadata } from "next";
import '@/sass/_global.scss';
import ThemeProvider from "@/context/ThemeProvider/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "RC Digital Marketing",
  description: "Porta il Tuo Business al Livello Successivo",
  icons: '/favicon.png',
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
  robots: "index, follow",
  verification: {
    google: "tKVwGDE-kic32BET_0U2ZcP4oR6TQkpN_wYGlssbYs0",
  }
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
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
