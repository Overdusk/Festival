import {useState, useRef} from 'react';
import EventDay from './EventDay.jsx'; 
import '../css/SetTimes.css';
function SetTimes()
{
	const lday = useRef(null);
	const rday = useRef(null);
	const [day, setDay] = useState('day-l');
	const changeClass = (e) => {
		if(e.target.classList[0] == 'day-l')
		{
			e.target.classList.add('d-active');
			rday.current.classList.remove('d-active');
			setDay('day-l');
		}
		if(e.target.classList[0] == 'day-r')
		{
			e.target.classList.add('d-active');
			lday.current.classList.remove('d-active');
			setDay('day-r');
		}
	}
	return (
		<>
			<div className="day-selector-container">
				
				<div className="day-selector-box">
					<div className="day-l d-active" onClick={ changeClass } ref={ lday }>Viernes</div>
					<div className="day-r" onClick={ changeClass } ref ={ rday }>Sábado</div>
				</div>
			</div>
			{
				(day == 'day-l') ? (<EventDay day='leftday' />) : (<EventDay day= 'rightday' />)
			}
		</>
	)
}

export default SetTimes;