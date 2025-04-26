import '@/sass/_global.scss';
import Navbar from '@/ui/Navbar/Navbar';
import Footer from "@/ui/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}
