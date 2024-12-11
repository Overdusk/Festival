import '../css/LineupFloor.css'
function LineupFloor()
{
	return (
		<>
			<div className="lineup-floor">
				<div className="album-zone">
					<img src="/1.jpg" className="album"/>
					<img src="/2.jpg" className="album"/>
					<img src="/3.png" className="album"/>
					<img src="/4.jpg" className="album"/>
					<img src="/5.jpeg" className="album"/>
				</div>
				<div className="album-text">
					<span>
						LINEUP 2024
					</span>
					<span>
						LISTOS PARA 2024
					</span>
					<ul className="artist-list">
						<li>
				    		The Affliction
						</li>
						<li>
				    		Incomparable
						</li>
						<li>
				    		Worlds Collide
						</li>
						<li>
				    		Dead by April
						</li>
						<li>
				    		Let the World Know
						</li>
						<li>
				    		Dead by April (Bonus Version)
						</li>
						<li>
				    		Incomparable (Mistery Version)
						</li>
						<li>
				    		Angels of Clarity
						</li>
						<li>
				    		Stronger
						</li>
						<li>
				    		Heartbeat Failing
						</li>
					</ul>
					<p>Y MUCHOS MAS</p>
					<button className="view-lineup">
        				VER LINEUP 2024
        			</button>
				</div>
			</div>
		</>
	)
}

export default LineupFloor;