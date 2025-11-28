import Hero from "./Components/Hero";
import Footer from "./Components/Footer"
import AboutUs from "./Components/AboutUs"
import Services from "./Components/Services";
import ChooseUs from "./Components/ChooseUs";
export default function Home() {
  return (
    <div className="m-5 flex justify-center">
      <div className="w-90/100">
        <Hero />
        <AboutUs />
        <Services />
        <ChooseUs />
        <Footer />
      </div>
    </div>
  );
}
