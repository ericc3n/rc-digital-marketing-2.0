import type { Metadata } from "next";
import '@/sass/_global.scss';
import ThemeProvider from "@/context/ThemeProvider/ThemeProvider";

export const metadata: Metadata = {
  title: "RC Digital Marketing",
  description: "Porta il Tuo Business al Livello Successivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
