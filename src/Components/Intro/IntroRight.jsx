import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import profilePic from "../../assets/profilepic.jpeg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 50px;
  }
`;

const ProfileImg = styled(motion.img)`
  width: 300px;
  height: 400px;
  object-fit: cover;
  background-position: center center;
  border-radius: 20px;
  border: 1px solid black;
  z-index: 50;
  @media ${({ theme }) => theme.device.laptop} {
    width: 250px;
    height: 300px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 200px;
    height: 250px;
  }
`;

const WhiteBackGround = styled(motion.div)`
  width: 300px;
  height: 400px;
  position: absolute;
  border: 1px solid black;
  background-color: #dde1e9;
  border-radius: 20px;
  bottom: ${({ bottom }) => bottom};
  margin-left: ${({ marginleft }) => marginleft};
  z-index: ${({ zindex }) => zindex};
  @media ${({ theme }) => theme.device.laptop} {
    width: 250px;
    height: 300px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 200px;
    height: 250px;
  }
`;

const IntroRight = () => {
  return (
    <Wrapper>
      <AnimatePresence>
        <ProfileImg key="profile-img" src={profilePic}></ProfileImg>
        <WhiteBackGround
          key="white-bg-1"
          bottom="10px"
          marginleft="20px"
          zindex={3}
        />
        <WhiteBackGround
          key="white-bg-2"
          bottom="20px"
          marginleft="38px"
          zindex={2}
        />
      </AnimatePresence>
    </Wrapper>
  );
};

export default IntroRight;
