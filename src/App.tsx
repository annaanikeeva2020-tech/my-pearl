import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Materials from "./components/Materials/Materials";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Materials />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
