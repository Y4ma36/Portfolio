import React from "react";
import { styled } from "styled-components";
import { MaxWidthWrapper } from "../../Styles/CommonStyle";
import { IntroLeft } from "./IntroLeft";
import IntroRight from "./IntroRight";

const Wrapper = styled.div`
  height: 700px;
  background-color: #83aca6;
  @media ${({ theme }) => theme.device.tablet} {
    height: 950px;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 1 1;
`;

export const Introduction = () => {
  return (
    <Wrapper id="intro">
      <MaxWidthWrapper>
        <Main>
          <Col>
            <IntroLeft />
          </Col>
          <Col>
            <IntroRight />
          </Col>
        </Main>
      </MaxWidthWrapper>
    </Wrapper>
  );
};
