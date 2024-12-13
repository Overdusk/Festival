import '../css/Gallery.css';
import Navbar from '../components/Navbar.jsx';
import FooterFloor from '../components/FooterFloor.jsx';
function Gallery(){
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
						<div className="gpic" style={{backgroundImage: `url('/snowboard.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/beach.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/festivalimage.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/metal-vlanding.webp')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>


						<div className="gpic" style={{backgroundImage: `url('/metal-vlanding.webp')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/festivalimage.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/beach.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/snowboard.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						
						<div className="gpic" style={{backgroundImage: `url('/snowboard.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/beach.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/festivalimage.jpg')`}}>
							<div className="ggradient">
								<span>
									PIX ONE
								</span>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</span>
							</div>
						</div>
						<div className="gpic" style={{backgroundImage: `url('/metal-vlanding.webp')`}}>
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
				<FooterFloor />
			</div>
		</>
	);
}

export default Gallery;