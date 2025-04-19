import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
