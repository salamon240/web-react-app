import Fearured from "../../fearured/Fearured";
import Navbar from "../../navbar/Navbar";
import './home.scss'
import video from "../../../imge/3182019-uhd_3840_2160_25fps.mp4"
import Footer from "../../footer/Footer";

function Home() {
  
  return (
    <div className="home">
    <Navbar/>
         <video
        className="video"
       autoPlay 
       loop
       muted
       
        src={video}
      ></video>
  
    <div className="main">
      <Fearured/>
       </div>
       <footer>
        <Footer/>
       </footer>
       <br />
       <br />
       <br />
       <br />
       
    </div>
  );
}

export default Home;
