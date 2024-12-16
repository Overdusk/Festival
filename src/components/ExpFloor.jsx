import '../css/ExpFloor.css';
import { Link } from 'react-router-dom'
function ExpFloor()
{
	return(
		<>
			<div className="exp-section">
				<div className="emf-container">
					<span className="emf-title">EMF A TU MANERA</span>
					<button className="emf-button">COMING SOON TICKETS</button>
				</div>
				<div className="camping-container">
					<div className="camping-column">
						<span>CAMPING</span>
						<p>Es un momento increíble para conectar con la naturaleza, con la música y pasar un buen momento con tus amigos. Llénate de nuevas experiencias dentro del festival.</p>
						<Link to="#"> Mas Información </Link>
					</div>
					<img src="/3.png" className="camping-image" />
				</div>
			</div>
			<div className="food-and-map">
				<div className="food-section">
					<img src="/1.jpg" className="foodimg" />
					<span className="food-title">FOODIE LIFE</span>
					<span>Eso que se te antoja para el monchis lo encuentras acá</span>
					<Link to="/artists">Mas Información</Link>
				</div>
				<div className="food-section">
					<img src="/1.jpg" className="foodimg" />
					<span className="food-title">FOODIE LIFE</span>
					<span>Eso que se te antoja para el monchis lo encuentras acá</span>
					<Link to="/artists">Mas Información</Link>
				</div>
			</div>
		</>
	);
}
export default ExpFloor;