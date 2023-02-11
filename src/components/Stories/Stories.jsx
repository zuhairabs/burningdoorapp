import { Link } from "framework7-react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { BsFillVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  padding: 0;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const CustomSeeMore = styled(Link)`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1001;
  text-align: center;
  font-size: 1rem;
  bottom: 20px;
  position: absolute;
  padding: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  font-weight: 600;
  width: 50%;
  border-radius: 35px;
`;

const CustomHeader = styled.div`
  position: absolute;
  top: 40px;
  z-index: 98;
  padding: 0 1rem;
  left: 0;
  right: 0;
  margin: auto;
  width: max-content;

  p {
    font-weight: 600;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    padding: 0.5rem 1rem;
    border-radius: 35px;
  }
`;

const Icon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  position: absolute;
  top: 56px;
  z-index: 1001;
  right: 2rem;
`;

const MuteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  position: absolute;
  top: 56px;
  z-index: 1001;
  left: 2rem;
`;

export const Story = ({ story }) => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const muteVideo = () => {
    setMuted(true);
  };

  const unMuteVideo = () => {
    setMuted(false);
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <ContentWrapper>
      {story.story.type === "image" ? (
        <Image src={story.story.img} alt={story.story.title} />
      ) : (
        <Video
          ref={videoRef}
          src={story.story.video}
          autoPlay
          playsInline
          muted
        />
      )}
      <CustomHeader>
        <p>{story.story.title}</p>
      </CustomHeader>
      <Icon popupClose>
        <IoClose size={22} strokeWidth={4} />
      </Icon>
      {story.story.type === "video" && (
        <>
          {muted ? (
            <MuteIcon onClick={() => unMuteVideo()}>
              <BsVolumeMuteFill size={22} />
            </MuteIcon>
          ) : (
            <MuteIcon onClick={() => muteVideo()}>
              <BsFillVolumeUpFill size={22} />
            </MuteIcon>
          )}
        </>
      )}
      <CustomSeeMore href={story.story.url} external>
        Read More →
      </CustomSeeMore>
    </ContentWrapper>
  );
};
