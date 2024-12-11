import '../css/SingleArtist.css';
import Navbar from '../components/Navbar.jsx';
import FooterFloor from '../components/FooterFloor.jsx';
function SingleArtist()
{
	return (
		<>
			<div className="page-container">
				<Navbar />
				<div className="page-content">
					<div className="artist-name">
						<span>DEAD BY APRIL</span>
					</div>
					<div className="artist-card">
						<div className="artist-section">
							<img src="/5.jpeg" className="artist-cover" />
							<div className="artist-links">
								<i className="bi bi-spotify"></i>
								<i className="bi bi-instagram"></i>
							</div>
						</div>
						<div className="music-player">
						<iframe 
								style={{ borderRadius:'12px' }} 
								src="https://open.spotify.com/embed/artist/2otRZcOVNcmdkZ5nEoogy6?utm_source=generator" 
								width="100%" 
								height="400" 
								frameBorder="0" 
								allowfullscreen="" 
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
								loading="lazy"
						></iframe>
						<p>
							Dead by April is a Swedish metalcore band from Gothenburg, formed in 2007 by Pontus Hjelm and Jimmie Strimell. The current band lineup consists of Pontus Hjelm (guitars/keyboards/clean vocals), Christopher Kristensen (unclean vocals) and Markus Wesslén (bass/backing growled vocals). 
						</p>
						</div>
					</div>
				</div>
				<FooterFloor />
			</div>
		</>
	);
}

export default SingleArtist;