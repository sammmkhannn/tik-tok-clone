import React from 'react'
import "./VideoSidebar.css";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from 'react';
import FavouritBorderIcon from "@material-ui/icons/FavoriteBorder";
function VideoSidebar({likes,shares,messages}) {
    const [liked, setLiked] = useState(false);
  return (
      <div className="videoSidebar">
    <div className="videoSidebar__button">
        {
            liked ? (<FavouriteIcon fontSize='large'/>): (<FavouritBorderIcon  fontSize='large' onClick={(e) => liked ? setLiked(false) : setLiked(true) }/>)
        }
              <p>{liked ? likes + 1 : likes - 1}</p>      
    </div>
    <div className="videoSidebar__button">
        <MessageIcon fontSize='large'/>
        <p>{messages}</p>
    </div>
     <div className="videoSidebar__button">
         <ShareIcon fontSize='large'/>
         <p>{shares}</p>
     </div>
     </div>
  )
}

export default VideoSidebar;