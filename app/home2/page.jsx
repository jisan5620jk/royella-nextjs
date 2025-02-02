import Agency from '../Components2/Agency/Agency';
import Blogs from '../Components2/Blogs/Blogs';
import Facilities from '../Components2/Facilities/Facilities';
import HeroSection from '../Components2/HeroSection/HeroSection';
import Places from '../Components2/Places/Places';
import Rooms from '../Components2/Rooms/Rooms';
import Testimonials from '../Components2/Testimonials/Testimonials';
import Footer2 from '../Shared/Footer/Footer2';
import Navbar2 from '../Shared/Navbar/Navbar2';

const page = () => {
  return (
    <>
      <Navbar2 />
      <HeroSection />
      <Agency />
      <Facilities />
      <Places />
      <Rooms />
      <Testimonials />
      <Blogs />
      <Footer2 />
    </>
  );
};

export default page;
