import { AuthorityMetrics } from "@/components/home/AuthorityMetrics";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TestimonialHero } from "@/components/home/TestimonialHero";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <TestimonialHero />
        <AuthorityMetrics />
        <ClientsSection />
      </main>
      <Footer />
    </>
  );
}
