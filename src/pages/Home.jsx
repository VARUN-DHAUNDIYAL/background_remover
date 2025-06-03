import Header from "../components/Header.jsx";
import BgRemovalSteps from "../components/BgRemovalSteps.jsx";
import BgSlider from "../components/BgSlider.jsx";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import TryNow from "../components/TryNow.jsx";

const Home = () => {
    return (
        <div>
            {/*hero section*/}
            <Header />

            {/*background removal steps section on landing page*/}
           <BgRemovalSteps/>
            {/*background removal slider section on landing page after steps*/}
          <BgSlider/>
            {/*purchase credit section*/}
            <Pricing/>
            {/*user experience and testimonial*/}
            <Testimonials/>
            {/* try now section at last of landing/homepage*/}
            <TryNow/>
        </div>
    )
}
export default Home;