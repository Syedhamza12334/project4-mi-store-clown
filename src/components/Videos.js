import React from 'react'
import VideoCard from "./VideoCard"; 
import "../styles/Video.css";


const Videos = ({videos}) => {
  return (
    <div className="videos">
        {
            videos.map((item,index)=>(
                <VideoCard  name={item.name} image={item.image }  index={index} key={item.image} />
            ))
        }
      
    </div>
  )
}

export default Videos
