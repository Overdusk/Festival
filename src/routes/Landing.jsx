import '../css/Landing.css'
import Navbar from '../components/Navbar.jsx';
import BannerFloor from '../components/BannerFloor.jsx';
import LineupFloor from '../components/LineupFloor.jsx';
import VideoFloor from '../components/VideoFloor.jsx';
import ExpFloor from '../components/ExpFloor.jsx';
import FooterFloor from '../components/FooterFloor.jsx';

function Landing() {
  return (
    <>
      <BannerFloor />
      <LineupFloor />
      <VideoFloor />
      <ExpFloor />
      <FooterFloor />
    </>
  )
}

export default Landing;
