import React from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video({url,channel,song,description,likes,messages,shares}) {
    const[playing,setPlaying] = React.useState(false);
    const videoRef = React.useRef(null);
    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    
  return (
    <div className="video">
        <video src={url}
        loop
        onClick={() => handleVideoPress()}
        ref={videoRef}
        className="video__player"
        >
        </video>
        <VideoFooter channel='sssss' description='WOW EPIC MERN STACK TIKTOK' song="99 problems but React ain't one"/>
          <VideoSidebar likes={likes} messages={messages} shares={shares} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQ1txY6qf-ULMuEpJZfCsZXtK-VeiN9pn6A&usqp=CAU" alt="logo" className='logo'/>
          
    </div>
  )
}

export default Video