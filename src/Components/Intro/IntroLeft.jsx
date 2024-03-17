import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 100px;
  }
`;

const Name = styled.h1`
  font-size: 50px;
  margin-top: 20px;
  &::after {
    content: "\\2014";
    margin-left: 10px;
  }
  &::before {
    content: "\\2014";
    margin-right: 10px;
  }
  margin-bottom: 5px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 40px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 25px;
  }
`;

const Welcome = styled.h1`
  font-size: 45px;
  &::after {
    content: "";
    display: block;
    width: 40px;
    border: 2px solid #f3eada;
    border-radius: 5px;
    margin: 25px auto;
    @media ${({ theme }) => theme.device.mobile} {
      width: 20px;
    }
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 35px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
`;

const Message = styled.p`
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 18px;
    width: 90%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 13px;
    width: 85%;
  }
  .Hello {
    font-size: 30px;
    font-weight: bold;
    @media ${({ theme }) => theme.device.laptop} {
      font-size: 25px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 20px;
    }
  }
`;

const MoreInfoBtn = styled.button`
  width: 200px;
  padding: 20px 0px;
  background-color: #96b1ac;
  border-radius: 20px;
  font-size: 20px;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 150px;
    font-size: 15px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 13px;
    width: 120px;
  }
`;

export const IntroLeft = () => {
  return (
    <Wrapper>
      <Name>Elijah J Kim</Name>
      <Welcome>Welcome to My Website </Welcome>
      <Message>
        <span className="Hello">Hello.</span>
        <br /> I'm a developer aspiring to become a full-stack web developer. My
        goal is to continuously evolve and grow while working together.
      </Message>
      <MoreInfoBtn>More Information &darr;</MoreInfoBtn>
    </Wrapper>
  );
};
