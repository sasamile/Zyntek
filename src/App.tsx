import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "./components/sections/testimonials";
import { Partnerships } from "./components/sections/partnerships";
import { About } from "./components/sections/about";
import { Services } from "./components/sections/services";
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partnerships />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
