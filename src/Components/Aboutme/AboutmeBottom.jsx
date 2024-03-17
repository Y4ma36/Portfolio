import React from "react";
import styled from "styled-components";
import {
  faUser,
  faLanguage,
  faLocationDot,
  faPhone,
  faEnvelope,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 40px;
`;

const ItemsList = styled.div`
  padding: 50px 60px;
  display: flex;
  gap: 20px;
`;

const Icon = styled.div``;

const Item = styled.div``;

const Subject = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SubjectInfo = styled.div`
  font-size: 18px;
`;

const AboutmeBottom = () => {
  return (
    <Wrapper>
      <ItemsList>
        <Icon>
          <FontAwesomeIcon icon={faUser} size="2x"></FontAwesomeIcon>
        </Icon>
        <Item>
          <Subject>Name</Subject>
          <SubjectInfo>Elijah Jung Kim</SubjectInfo>
        </Item>
      </ItemsList>
      <ItemsList>
        <Icon>
          <FontAwesomeIcon icon={faLanguage} size="2x"></FontAwesomeIcon>
        </Icon>
        <Item>
          <Subject>Language</Subject>
          <SubjectInfo>English & Korean</SubjectInfo>
        </Item>
      </ItemsList>
      <ItemsList>
        <Icon>
          <FontAwesomeIcon icon={faLocationDot} size="2x"></FontAwesomeIcon>
        </Icon>
        <Item>
          <Subject>Address</Subject>
          <SubjectInfo>Bloomington, IN, US</SubjectInfo>
        </Item>
      </ItemsList>
      <ItemsList>
        <Icon>
          <FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon>
        </Icon>
        <Item>
          <Subject>Phone Number</Subject>
          <SubjectInfo>+1-323-388-0355</SubjectInfo>
        </Item>
      </ItemsList>
      <ItemsList>
        <Icon>
          <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
        </Icon>
        <Item>
          <Subject>Email</Subject>
          <SubjectInfo>elijahkim45@gmail.com</SubjectInfo>
        </Item>
      </ItemsList>
      <ItemsList>
        <Icon>
          <FontAwesomeIcon icon={faSchool} size="2x"></FontAwesomeIcon>
        </Icon>
        <Item>
          <Subject>Education</Subject>
          <SubjectInfo>
            Indiana University Bloomington <br /> (Computer Science)
          </SubjectInfo>
        </Item>
      </ItemsList>
    </Wrapper>
  );
};

export default AboutmeBottom;
