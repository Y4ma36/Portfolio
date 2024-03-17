import React from "react";
import { MaxWidthWrapper } from "../Styles/CommonStyle";
import styled from "styled-components";
import { logos } from "../utils/footerLogo";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  &:first-child {
    margin: 20px 0px;
  }
`;

const LinkLogo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.bgphoto});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
  margin-left: 10px;
`;

const Copyright = styled.div`
  color: white;
`;

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Container>
          <Col>
            <Link to="https://github.com/Y4ma36">
              <LinkLogo
                bgphoto={
                  "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                }
              ></LinkLogo>
            </Link>

            <Link to="https://www.linkedin.com/in/elijah-kim-860788156/">
              <LinkLogo
                bgphoto={
                  "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                }
              ></LinkLogo>
            </Link>

            <Link to="https://www.instagram.com/1_1ie_jah/">
              <LinkLogo
                bgphoto={
                  "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg"
                }
              ></LinkLogo>
            </Link>
          </Col>
          <Col>
            <Copyright>
              <span> &#169;</span>
              <span>Elijah J Kim</span>
              <span>All rights reserved.</span>
            </Copyright>
          </Col>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Footer;
