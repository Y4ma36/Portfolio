import React from "react";
import styled from "styled-components";

import { backend, etc, frontend, mobileApp } from "../../utils/skills";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Col = styled.div`
  display: flex;
  gap: 10px;
  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: column;
  }
`;

const SkillsSortList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 20px 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const SkillsType = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: black;
  margin-bottom: 5px;
`;

const SkillsSortImg = styled.div`
  text-align: center;
  display: flex;
  @media ${({ theme }) => theme.device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  width: 120px;
  height: 120px;
  padding: 10px;
  background-image: url(${(props) => props.bgphoto});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-color: #6a9ea8;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  @media ${({ theme }) => theme.device.laptop} {
    width: 100px;
    height: 100px;
    padding: 10px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 50px;
    height: 50px;
    padding: 3px;
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-size: 20px;
  opacity: 0;
  border-radius: 10px;
  right: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillsName = styled.h3``;

const SkillsBottom = () => {
  return (
    <Wrapper>
      <Col>
        <SkillsSortList>
          <SkillsType>Back End</SkillsType>
          <SkillsSortImg>
            {backend.map((item, index) => (
              <AnimatePresence key={index}>
                <Item bgphoto={item.imgPath} key={item.name}>
                  <Overlay
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 1 },
                    }}
                  >
                    <SkillsName key={item.name}>{item.name}</SkillsName>
                  </Overlay>
                </Item>
              </AnimatePresence>
            ))}
          </SkillsSortImg>
        </SkillsSortList>
        <SkillsSortList>
          <SkillsType>Mobile App</SkillsType>
          <SkillsSortImg>
            {mobileApp.map((item, index) => (
              <AnimatePresence key={index}>
                <Item bgphoto={item.imgPath} key={item.name}>
                  <Overlay
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 1 },
                    }}
                  >
                    <SkillsName key={item.name}>{item.name}</SkillsName>
                  </Overlay>
                </Item>
              </AnimatePresence>
            ))}
          </SkillsSortImg>
        </SkillsSortList>
      </Col>
      <Col>
        <SkillsSortList>
          <SkillsType>etc</SkillsType>
          <SkillsSortImg>
            {etc.map((item, index) => (
              <AnimatePresence key={index}>
                <Item bgphoto={item.imgPath} key={item.name}>
                  <Overlay
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 1 },
                    }}
                  >
                    <SkillsName key={item.name}>{item.name}</SkillsName>
                  </Overlay>
                </Item>
              </AnimatePresence>
            ))}
          </SkillsSortImg>
        </SkillsSortList>
      </Col>
    </Wrapper>
  );
};

export default SkillsBottom;
