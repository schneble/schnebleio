import { Footer } from "../components/footer";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mobile-flow xai-bg overscroll-none  overscroll-x-none overscroll-y-none flex flex-col">
      <Head />
      <Navbar />
      <main className="container xai-bg overscroll-none overscroll-x-none overscroll-y-none mobile-flow xl:max-w-6xl max-w-4xl mx-auto mt-4 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
