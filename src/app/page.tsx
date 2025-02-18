import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Feacture from "./components/Feacture";
import Agents from "./components/Agents";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <div className="bg-black">
  <Header />
  <Hero/>
  <Technology/>
  <Feacture/>
  <Agents/>
  <Pricing/>
  <ContactForm/>
  <Footer/>
  </div>
  );
}
