import '../css/Artists.css';
import Navbar from '../components/Navbar.jsx';
import FooterFloor from '../components/FooterFloor';
import ArtistsGrid from '../components/ArtistsGrid.jsx';
import SetTimes from '../components/SetTimes.jsx';
import {useRef, useState} from 'react';
function Artists()
{
	const [content, setContent] = useState('lineup');
	const drawContent = () => {
		if(content == 'lineup')
		{
			return (
				<ArtistsGrid />
			)	
		}
		if(content == 'set-times')
		{
			return(
				<SetTimes />
			);
		}
		if(content == 'poster')
		{
			return (
				<div className="poster-container">
					<img src="/poster.jpg" />
				</div>
			);
		}
	}
	const changeContent = (e) => {
		setContent(e.target.getAttribute('spanname'));
	}
	return(
		<>
			<div className="page-container">
				<Navbar  />
				<div className="page-header">
					<div className="page-gradient">
						<span className="page-title">LINEUP 2024</span>
						<div className="page-subtitles">
							<span 
								className = { ( content == 'lineup' ) ? 'ps-active' : '' }
								onClick = { changeContent }
								spanname = 'lineup'
							>
								LINEUP
							</span>
							<span 
								className = { ( content == 'set-times' ) ? 'ps-active' : '' }
								onClick = { changeContent }
								spanname = 'set-times'
							>
								SET TIMES
							</span>
							<span 
								className = { ( content == 'poster' ) ? 'ps-active' : '' }
								onClick = { changeContent }
								spanname = 'poster'
							>
								POSTER
							</span>
						</div>
					</div>		
				</div>
				<div className="page-content">
					{
						drawContent()
					}
				</div>
				<FooterFloor />
			</div>	
		</>
	);
}

export default Artists;