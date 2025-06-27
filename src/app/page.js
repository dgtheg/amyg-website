import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Brands from "@/components/Brands";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main role="main">
      <Header />
      <Hero />
      <Projects />
      <Brands />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}