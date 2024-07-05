import Fearured from "../../fearured/Fearured";
import Navbar from "../../navbar/Navbar";
import './home.scss'
import video from "../../../imge/istockphoto-1743225414-640_adpp_is.mp4"
import Footer from "../../footer/Footer";

function Home() {
  
  return (
    <div className="home">
         <video
        className="video"
       autoPlay 
       loop
       muted
       
        src={video}
      ></video>
    <Navbar/>
    home
    <div className="main">
      <Fearured/>
       </div>
       <footer>
        <Footer/>
       </footer>
    </div>
  );
}

export default Home;
