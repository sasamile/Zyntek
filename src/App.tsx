import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "./components/sections/about";
import { Services } from "./components/sections/services";
import { Footer } from "./components/sections/footer";
import BentoGrid from "./components/sections/bentogrid";
import { TeamSection } from "./components/sections/teammembers";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Partnerships /> */}
      <About />
      <BentoGrid />
      <Services />
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;
