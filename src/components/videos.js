import React from "react";
import "./videos.css";

const Videos = () => {
  // Lista de URLs dos vídeos do YouTube em formato de incorporação
  const videoUrls = [
    "https://www.youtube.com/embed/Fa015OoDBL4",
    "https://www.youtube.com/embed/Pv_L7LK6lOU",
    "https://www.youtube.com/embed/Fa015OoDBL4",
    "https://www.youtube.com/embed/hAWHVyxoq-Y",
    "https://www.youtube.com/embed/Ukx61gR_N98",
    "https://www.youtube.com/embed/ZzbDsbEjxlI",
  ];

  return (
    <div className="video-gallery">
      {videoUrls.map((url, index) => (
        <div key={index} className="video-item">
          <iframe
            width="100%"
            height="315"
            src={url}
            title={`YouTube Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Videos;
