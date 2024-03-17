import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import * as S from "../Styles/CommonStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Link } from "react-scroll";

const ResponsiveIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  padding: 20px 0px;
  position: fixed;
  z-index: 500;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "white" : "transparent"};
`;

const Nav = styled(motion.nav)`
  width: 100%;
  padding: 5px 0px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  overflow-y: hidden;
`;

const Col = styled.div`
  &:last-child {
    right: 25px;
    position: absolute;
    z-index: 50;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-left: 40px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 30px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 23px;
    margin-left: 20px;
  }
`;

const MenuList = styled(motion.span)`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

const MenuBox = styled.div`
  display: none;
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 30px;
    height: 30px;
    right: 0;
  }
`;

const ToggleNav = styled(motion.div)`
  display: none;
  width: 100%;
  margin-top: 20px;
  background-color: white;
  transform-origin: top;
  color: ${({ theme }) => theme.colors.lightGrey};
  @media ${({ theme }) => theme.device.laptop} {
    display: block;
    padding: 30px 40px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 30px 40px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px 20px;
  }
`;

const ToggleUl = styled.ul``;

const ToggleList = styled.li`
  font-size: 25px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    color: #ff7675;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 18px;
  }
`;

const toggleVariant = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    trasition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleY: 0,
    trasition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();

  console.log(scrollY);

  //616
  //1196
  //2135
  //2746
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      navAnimation.start({
        backgroundColor: `white`,
      });
    } else {
      navAnimation.start({
        backgroundColor: "rgba(0,0,0,0)",
      });
    }
  });
  const handleToggle = () => {
    if (click) {
      return;
    }
    setToggle(!toggle);
  };

  return (
    <Wrapper animate={navAnimation}>
      <S.MaxWidthWrapper>
        <Nav>
          <Col>
            <Title>
              <Link to="intro" spy={true} smooth={true} offset={-65}>
                Elijah's Portfolio
              </Link>
            </Title>
          </Col>
          <Col>
            <MenuList>
              <Link to="aboutme" spy={true} smooth={true} offset={-65}>
                About Me
              </Link>
            </MenuList>
            <MenuList>
              <Link to="skills" spy={true} smooth={true} offset={-65}>
                Skills
              </Link>
            </MenuList>
            <MenuList>
              <Link to="archiving" spy={true} smooth={true} offset={-65}>
                Archiving
              </Link>
            </MenuList>
            <MenuList>
              <Link to="projects" spy={true} smooth={true} offset={-65}>
                Projects
              </Link>
            </MenuList>
          </Col>
          <Col>
            <MenuBox onClick={handleToggle}>
              <ResponsiveIcon icon={faBars} />
            </MenuBox>
          </Col>
        </Nav>
        <AnimatePresence>
          {toggle && (
            <ToggleNav
              variants={toggleVariant}
              transition={{ type: "linear" }}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ToggleUl>
                <ToggleList>About me </ToggleList>
                <ToggleList>Skills</ToggleList>
                <ToggleList>Archiving</ToggleList>
                <ToggleList>Projects</ToggleList>
              </ToggleUl>
            </ToggleNav>
          )}
        </AnimatePresence>
      </S.MaxWidthWrapper>
    </Wrapper>
  );
};

export default Header;
