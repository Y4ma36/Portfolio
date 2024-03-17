import React from "react";
import { MaxWidthWrapper, Title } from "../../Styles/CommonStyle";
import styled from "styled-components";
import { github } from "../../utils/github";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding-bottom: 50px;
`;

const Container = styled.div``;

const Col = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: hidden;
`;

const ArchivingContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
  padding: 0px 20px 30px 20px;
  @media ${({ theme }) => theme.device.laptop} {
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
`;

const ArchivingCol = styled(motion.div)`
  width: 33%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 10px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 60%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 70%;
  }
`;

const Github = styled.div`
  display: flex;
  align-items: center;
`;

const GithubLogo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.logopath});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const GithubName = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.namepath});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin-left: 8px;
`;

const GithubLink = styled.div`
  margin-top: 5px;
  a {
    text-decoration: none;
    color: #74b9ff;
  }
`;

const GithubPurpose = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 800;
`;

const GithubOverview = styled.div`
  margin-top: 5px;
  ul {
    list-style-type: disc;
    font-size: 18px;
    margin-left: 30px;
  }
  li {
    margin-top: 5px;
  }
`;

const Archiving = () => {
  return (
    <Wrapper id="archiving">
      <MaxWidthWrapper>
        <Container>
          <Col>
            <Title borderwidth="250px" color="#dfe6e9" bordercolor="#dfe6e9">
              Archiving
            </Title>
          </Col>
          <Col>
            <ArchivingContainer>
              {github.map((item, index) => (
                <ArchivingCol
                  whileHover={{
                    y: 15,
                  }}
                  transition={{ type: "tween" }}
                  key={index}
                >
                  <Github>
                    <GithubLogo logopath={item.githubLogo} alt="githublogo" />
                    <GithubName namepath={item.githubName} alt="githubname" />
                  </Github>
                  <GithubLink>
                    <Link to={`${item.address}`}>{item.address}</Link>
                  </GithubLink>
                  <GithubPurpose>{item.name}</GithubPurpose>
                  <GithubOverview>
                    <ul>
                      {item.overView.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </GithubOverview>
                </ArchivingCol>
              ))}
            </ArchivingContainer>
          </Col>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Archiving;
