"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface VideoPlayerProps {
  thumbnail: string;
  videoSrc: string;
  title: string;
  content?: React.ReactNode;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  thumbnail,
  videoSrc,
  title,
  content,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="relative bg-black overflow-hidden rounded-[35px] w-full h-[648px]">
      {!isVideoPlaying ? (
        <>
          {/* Default Thumbnail with Gradient */}
          <div className="relative w-full h-full">
            <Image
              src={thumbnail}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1EE5] to-[#002A3A00]" />
          </div>

          {/* Play Button and Text */}
          <div className="absolute left-[100px] bottom-[80px] p-6 text-white flex flex-col gap-9">
            <button
              onClick={handlePlayVideo}
              className="w-[80px] h-[80px] bg-slate-50 p-3 rounded-full flex items-center justify-center hover:bg-white transition duration-300"
            >
              <FaPlay size={27} color="black" />
            </button>

            <p className="text-4xl font-bold">{title}</p>
            <div>{content}</div>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`${videoSrc}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;
