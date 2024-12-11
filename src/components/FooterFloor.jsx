import '../css/FooterFloor.css';
import { Link } from 'react-router-dom';
function FooterFloor()
{
	return (
		<>
			<footer>
				<div className="logocontainer">
					<img src='/fcblogo.png' className="fcb" />
				</div> 
				<div className="logocontainer">
					<img src='/fcblogo.png' className="rs-fcb" />
					<img src='/mcdonalds.png' />
					<img src='/coca-cola.png' />
				</div> 
				<div className="logocontainer">
					<img src='/bac.png' />
					<img src='/sedal.png' />
					<img src='/axe.png' />
					<img src='/takis.png' />
					<img src='/absolut.png' />
					<img src='/vuse.png' />
					<img src='/LOGOS-VECTOR_GLUCOSORAL.png' />
					<img src='/LOGOS-VECTOR_MEAT-PACK.png' />
				</div> 
				<div className="logocontainer">
					<img src='/LOGOS-VECTOR_G7.png' />
					<img src='/joopa.png' />
				</div>
				<hr />
				<div className="lastlogocontainer">
					<img src="/payment-methods.png" className="payment" />
					<img src="/logo.jpeg" className="flogo" />
					<div className="icons-box">
						<div className="icon-container">
							<i className="bi bi-facebook"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-twitter"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-instagram"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-youtube"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-tiktok"></i>
						</div>
					</div>
				</div>
				<div className="footer-links">
					<Link to="/history">Historia EMF</Link>
					<Link to="/history">Why us?</Link>
					<Link to="/history">Contáctenos</Link>
					<Link to="/history">Términos de Uso</Link>
					<Link to="/history">Políticas de retorno</Link>
				</div>
				<div className="rs-lastlogos">
					<img src="/logo.jpeg" className="flogo" />
					<Link to="/history">Historia EMF</Link>
					<Link to="/history">Why us?</Link>
					<Link to="/history">Contáctenos</Link>
					<Link to="/history">Términos de Uso</Link>
					<Link to="/history">Políticas de retorno</Link>
					<img src="/payment-methods.png" className="payment" />
					<div className="icons-box">
						<div className="icon-container">
							<i className="bi bi-facebook"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-twitter"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-instagram"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-youtube"></i>
						</div>
						<div className="icon-container">
							<i className="bi bi-tiktok"></i>
						</div>
					</div>
				</div>
			</footer>
		</>
	)

}


export default FooterFloor;