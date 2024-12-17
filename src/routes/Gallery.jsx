import '../css/Gallery.css';
import '../css/ImageVisor.css';
import Navbar from '../components/Navbar.jsx';
import FooterFloor from '../components/FooterFloor.jsx';
import { useRef } from 'react';

function Gallery(){
	const imgVisor = useRef(null);
	const imgRef = useRef(null);
	const ivContainer = useRef(null);
	const invokeVisor = (e) => {
		let background = null;
		imgVisor.current.style.display = 'flex';
		background = e.target.parentElement.getAttribute('background');
		//Navegar hasta el div que tiene el background
		if(e.target.parentElement.className == 'ggradient'){
			background = e.target.parentElement.parentElement.getAttribute('background');
		}
		ivContainer.current.style.backgroundImage = `url( ${ background } )`;
	}
	const closeVisor = () => {
		if(imgVisor.current.style.display == 'flex')
		{
			imgVisor.current.style.display = 'none';
		}
	}
	return (
		<>
			<div className="page-container">
				<Navbar />
				<div className="page-header">
					<div className="page-gradient">
						<span className="page-title">Galería</span>
					</div>
				</div>
				<div className="page-content">
					<div className="gallery-grid">
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/snowboard.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/snowboard.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/snowboard.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/snowboard.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/snowboard.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/snowboard.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/snowboard.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/snowboard.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/snowboard.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/snowboard.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/snowboard.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/snowboard.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/beach.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/beach.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div 
							className="gpic" 
							style={{backgroundImage: `url('/sugarcult.jpg')`}}
							onClick={ invokeVisor }
							ref = {imgRef}
							background = '/sugarcult.jpg'
						>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="img-visor" ref={imgVisor}>
					<i 
						className="bi bi-x-octagon iv-icon" 
						onClick={ closeVisor }
					></i>
					<div className="iv-container" ref={ivContainer}>
						
					</div>
				</div>
				<FooterFloor />
			</div>
		</>
	);
}

export default Gallery;