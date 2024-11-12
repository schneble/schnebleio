
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import  { Footer } from "../components/footer"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mobile-flow overscroll-none  overscroll-x-none overscroll-y-none flex flex-col">
      <Head />
      <Navbar />
      <main className="container overscroll-none overscroll-x-none overscroll-y-none mobile-flow mx-auto max-w-6xl px-6 mt-12">
        {children}
      </main>
    <Footer/>
    </div>
  );
}
