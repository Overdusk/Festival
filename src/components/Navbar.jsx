import '../css/Navbar.css'
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
function Navbar()
{
	const { hash, pathname, search } = useLocation();
	const bg = (pathname != '/') ? {backgroundColor: '#2F346B'} : {backgroundColor: 'rgba(52, 52, 52, 0.01)'};


	//responsive variables
	const rsContent = useRef();
	const brContent = useRef();
	const xRsContent = useRef();
	const openCollapseMenu = (e) => {
    	e.target.classList.toggle("active");
      	rsContent.current.style.display = "block";
      	brContent.current.style.display = 'none';
      	xRsContent.current.style.display = 'block';
    }
	const closeCollapseMenu = (e) => {
      	rsContent.current.style.display = "none";
      	brContent.current.style.display = 'block';
      	xRsContent.current.style.display = 'none';
	}
	return (
		<>
			<nav style= {bg} >
		        <ul className="navbar-buttons">
					<li>
						<Link to="/info">Información</Link>
					</li>
					<li>
						<Link to="/artists">Lineup 2024 </Link>
					</li>
					<li>
						<Link to="#">Artists </Link>
					</li>
					<li>
						<Link to="#">Artists </Link>
					</li>
					<li>
						<img src='/logo.jpeg' className="festival-logo"/>
					</li>
					<li>
						<Link to="/artists">Lineup 2024 </Link>
					</li>
					<li>
						<Link to="#">Artists </Link>
					</li>
					<li>
						<Link to="#">Artists </Link>
					</li>
					<ul className="icons-box">
						<li>
							<i className="bi bi-instagram"></i>
						</li>
						<li>
							<i className="bi bi-tiktok"></i>
						</li>
					</ul>
		        </ul>
	      	</nav>
	      	<div className="rs-nav">
				<img 
					src='/logo.jpeg' 
					className="festival-rs-logo"
				/>
				<i 
					className="bi bi-x fl-x"
					type="button"
					onClick = {closeCollapseMenu}
					ref= {xRsContent}
				>
				</i>
				<i 
					className="bi bi-list fl-burger"
					type="button"
					onClick = {openCollapseMenu}
					ref= {brContent}
				>
				</i>
				<div className="collapseContent" ref={rsContent}>
					<div className="crossContainer"></div>
					<ul className="rs-ffloor">
						<li>TICKETS</li>
						<li>LINEUP 2024</li>
						<li>EXPERIENCIA</li>
						<li>CAMPING</li>
						<li>AMENIDADES</li>
						<li>FOODIE LIFE</li>
						<li>CASHLESS</li>
					</ul>
					<ul className="rs-ffloor">
						<li>SHOP</li>
						<li>FAQ'S</li>
						<li>INFO</li>
						<li>CONTACTO</li>
					</ul>
				</div>
	      	</div>

      	</>
	)
}

export default Navbar;