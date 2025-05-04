import About from "../components/About";
import Rooms from "../components/Rooms";
import Reservation from "../components/Reservation";
import Contact from "../components/Contact";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Reservation />
      <Contact />
    </main>
  );
}
