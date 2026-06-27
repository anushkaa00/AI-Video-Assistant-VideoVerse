import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import MeetingCard from "../components/MeetingCard";
import ResultsCard from "../components/ResultsCard";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />

      <Hero />

      <Stats />

      <MeetingCard />

      <ResultsCard />

      <Features />

      <About />

      <Footer />
    </main>
  );
}

export default Home;