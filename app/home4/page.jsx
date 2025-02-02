import BookingVideo from "../Components4/BookingVideo/BookingVideo";
import CheckingForm from "../Components4/CheckingForm/CheckingForm";
import ExtraService from "../Components4/ExtraService/ExtraService";
import Gallery from "../Components4/Gallery/Gallery";
import HeroSection from "../Components4/HeroSection/HeroSection";
import LatestNews from "../Components4/LatestNews/LatestNews";
import Testimonial from "../Components4/Testimonial/Testimonial";
import WelcomeSection from "../Components4/WelcomeSection/WelcomeSection";
import Footer4 from "../Shared/Footer/Footer4";
import Navbar4 from "../Shared/Navbar/Navbar4";

const page = () => {
  return (
    <>
      <Navbar4 />
      <HeroSection />
      <WelcomeSection />
      <ExtraService />
      <CheckingForm />
      <BookingVideo />
      <Testimonial />
      <LatestNews />
      <Gallery />
      <Footer4 />
    </>
  );
};

export default page;
