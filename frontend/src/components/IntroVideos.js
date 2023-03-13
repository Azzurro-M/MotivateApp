import React from "react";
import "./css/IntroVideos.css";

const videos = [
  {
    title: "Full Body Workout for Women",
    src: "https://www.youtube.com/embed/JBV0tFgEPhw",
    poster: "https://i.ytimg.com/vi/JBV0tFgEPhw/hqdefault.jpg",
  },
  {
    title: "30 Minute Full Body Workout with Dumbbells",
    src: "https://www.youtube.com/embed/ERgYSGnGBn8",
    poster: "https://i.ytimg.com/vi/ERgYSGnGBn8/hqdefault.jpg",
  },
  {
    title: "10 Minute Home Workout for Six Pack Abs",
    src: "https://www.youtube.com/embed/0CJJrTQcDSE",
    poster: "https://i.ytimg.com/vi/0CJJrTQcDSE/hqdefault.jpg",
  },
  {
    title: "Full Body Workout for Women",
    src: "https://www.youtube.com/embed/JBV0tFgEPhw",
    poster: "https://i.ytimg.com/vi/JBV0tFgEPhw/hqdefault.jpg",
  },
  {
    title: "30 Minute Full Body Workout with Dumbbells",
    src: "https://www.youtube.com/embed/ERgYSGnGBn8",
    poster: "https://i.ytimg.com/vi/ERgYSGnGBn8/hqdefault.jpg",
  },
  {
    title: "10 Minute Home Workout for Six Pack Abs",
    src: "https://www.youtube.com/embed/0CJJrTQcDSE",
    poster: "https://i.ytimg.com/vi/0CJJrTQcDSE/hqdefault.jpg",
  },
  {
    title: "Full Body Workout for Women",
    src: "https://www.youtube.com/embed/JBV0tFgEPhw",
    poster: "https://i.ytimg.com/vi/JBV0tFgEPhw/hqdefault.jpg",
  },
  {
    title: "30 Minute Full Body Workout with Dumbbells",
    src: "https://www.youtube.com/embed/ERgYSGnGBn8",
    poster: "https://i.ytimg.com/vi/ERgYSGnGBn8/hqdefault.jpg",
  },
  {
    title: "10 Minute Home Workout for Six Pack Abs",
    src: "https://www.youtube.com/embed/0CJJrTQcDSE",
    poster: "https://i.ytimg.com/vi/0CJJrTQcDSE/hqdefault.jpg",
  },
];

export const IntroVideos = () => {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div key={video.src} className="video">
          <video
            title={video.title}
            src={video.src}
            poster={video.poster}
            controls
          />
        </div>
      ))}
    </div>
  );
};
