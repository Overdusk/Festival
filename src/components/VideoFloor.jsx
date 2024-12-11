import '../css/VideoFloor.css';
import { useRef } from 'react';
function VideoFloor()
{
	const fakeVideo = useRef(false);
	const videoContainer = useRef(false);
	const video = useRef(false);
	const playVideo = () => {
		video.current.play();
	}
	const stopVideo = () => {
		video.current.pause();
		video.current.currentTime = 0;
		fakeVideo.current.style.display = 'flex';		
		videoContainer.current.style.display = 'none';
	}
	const prepareVideo = () => {
		fakeVideo.current.style.display = 'none';		
		videoContainer.current.style.display = 'block';
		playVideo();
	}
	return(
		<>
			<div className="video-section">
				<div className="fake-video" ref= { fakeVideo }>
					<img src="/album-vlanding.jpg" className="album-vlanding"/>
					<i className="bi bi-play-circle" onClick= { prepareVideo }></i>
				</div>
				<div className="video-container" ref = { videoContainer }>
					<i className="bi bi-x-octagon" onClick = { stopVideo } ></i>
					<video ref= { video }>
						<source 
							src="/video-landing.mp4" 
							type="video/mp4" 
						></source>
					</video>
				</div>
			</div>
		</>
	);
}
export default VideoFloor;