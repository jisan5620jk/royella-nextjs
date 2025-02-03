import Events from "../Components3/Events/Events";
import HeroSection from "../Components3/HeroSection/HeroSection";
import Newsletter from "../Components3/Newsletter/Newsletter";
import Offers from "../Components3/Offers/Offers";
import Player from "../Components3/Player/Player";
import Rooms from '../Components3/Rooms/Rooms';
import Testimonials from "../Components3/Testimonials/Testimonials";
import Footer3 from "../Shared/Footer/Footer3";
import Navbar3 from "../Shared/Navbar/Navbar3";

const page = () => {
  return (
    <>
      <Navbar3 />
      <HeroSection />
      <Rooms />
      <Player />
      <Offers />
      <Events />
      <Testimonials />
      <Newsletter />
      <Footer3 />
    </>
  );
};

export default page;
