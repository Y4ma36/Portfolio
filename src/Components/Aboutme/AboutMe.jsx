import React from "react";
import styled from "styled-components";
import { MaxWidthWrapper, Title } from "../../Styles/CommonStyle";
import AboutmeBottom from "./AboutmeBottom";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Col = styled.div``;

const AboutMe = () => {
  return (
    <Wrapper id="aboutme">
      <MaxWidthWrapper>
        <Container>
          <Col>
            <Title borderwidth="200px">About Me</Title>
          </Col>
          <Col>
            <AboutmeBottom />
          </Col>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default AboutMe;
