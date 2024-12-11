import Navbar from './Navbar.jsx';
import '../css/BannerFloor.css';
function BannerFloor()
{
	return (
    <>
  		<div className ="banner-floor">
        <section className="banner-mask">
          <Navbar/>
        	<div className="title-section">
        		<img src="/gitar1.ico" className="banner-middle-icon"/>
            <img src="/gitar1.ico" className="rs-banner-middle-icon"/>
        		<span className="title-time-left">2 DÍAS PARA HACER HISTORIA</span>
        		<span className="subtitle-time-left">La experiencia de tu vida, te espera.</span>
        		<span className="subtitle-time-left">10th Year Anniversary</span>
        		<div className="buttons-section">
        			<button>
        				COMING SOON TICKETS 2025
        			</button>
        			<button>
        				AFTERMOVIE 2023
        			</button>
        		</div>
        	</div>
        </section>
      </div>	
    </>
	)
}

export default BannerFloor;