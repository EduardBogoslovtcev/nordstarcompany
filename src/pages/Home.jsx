import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <WhyChooseUs />
            <hr></hr>
            <Services />
            <hr></hr>
            <Pricing />
            <Footer />
        </>
    );
}
