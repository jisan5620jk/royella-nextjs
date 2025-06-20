import Apartments from "../Components5/Apartments/Apartments";
import Best_Offer from "../Components5/Best_Offer/Best_Offer";
import Blogs from "../Components5/Blogs/Blogs";
import Gallery from "../Components5/Gallery/Gallery";
import HeroSection from "../Components5/HeroSection/HeroSection";
import Make_Appointment from "../Components5/Make_Appointment/Make_Appointment";
import Rooms from "../Components5/Rooms/Rooms";
import Testimonials from "../Components5/Testimonials/Testimonials";
import Footer5 from "../Shared/Footer/Footer5";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar5 from "../Shared/Navbar/Navbar5";

const page = () => {
  return (
    <>
      <Navbar5 />
      <HeroSection />
      <Apartments />
      <Rooms />
      <Best_Offer />
      <Gallery />
      <Make_Appointment />
      <Testimonials />
      <Blogs />
      <Footer5 />
    </>
  );
};

export default page;
