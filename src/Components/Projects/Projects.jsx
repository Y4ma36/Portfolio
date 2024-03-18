import React, { useState } from "react";
import { MaxWidthWrapper, Title } from "../../Styles/CommonStyle";
import styled from "styled-components";
import { projects } from "../../utils/projects";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";

const Wrapper = styled.div`
  background-color: #aea56b;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const ProjectsCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProjectsMain = styled.div`
  width: 90%;
  height: 80vh;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @media (max-width: 1400px) {
    height: 110vh;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 120vh;
  }
`;

const ProjectsTitle = styled.div`
  padding: 50px 0px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const ProjectsInfoContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Project Image

const ProjectsImgContainer = styled(motion.div)`
  width: 65%;
  height: 100%;
  overflow: hidden;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const ProjectsImgSlider = styled(motion.div)`
  width: 100%;
  height: 90%;
  display: flex;
  @media (max-width: 1400px) {
    height: 90%;
  }
`;

const ProjectsImg = styled.div`
  min-width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgphoto});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 1400px) {
    background-size: contain;
    background-position: center;
  }
`;

const ProjectsNumber = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    font-size: 23px;
  }
  span {
    font-size: 20px;
    margin: 0px 20px;
  }
`;

// Project Information

const ProjectsInfo = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const ProjectsOverview = styled.div`
  width: 100%;
  font-size: 25px;
  &::after {
    content: "";
    display: block;
    width: 80%;
    border-bottom: 1px solid black;
    margin: 20px auto;
  }
  @media (max-width: 1400px) {
    width: 85%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 15px;
  }
`;

const ProjectsInfoTable = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProjectsTableList = styled.div`
  width: 100%;
  display: block;
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5px;
  }
`;

const SectionName = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8.4rem;
  font-size: 20px;
  font-weight: bold;
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 15px;
    padding: 5px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
  }
`;

const SectionInfo = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: calc(100% - 8.4rem);
  font-size: 18px;
  a {
    color: #74b9ff;
    text-decoration: none;
  }
  button {
    border: none;
    background-color: inherit;
    color: #74b9ff;
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 15px;
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    width: 100%;
  }
`;

const Projects = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const dragX = useMotionValue(0);
  const StandardDragX = 50;

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -StandardDragX && imgIndex < projects[0].imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
      setPageNum((prev) => prev + 1);
    } else if (x >= StandardDragX && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
      setPageNum((prev) => prev - 1);
    }
  };

  return (
    <Wrapper id="projects">
      <MaxWidthWrapper>
        <Container>
          <ProjectsCol>
            <Title borderwidth="200px" color="#dfe6e9">
              Projects
            </Title>
          </ProjectsCol>
          <ProjectsCol>
            {projects.map((project) => (
              <ProjectsMain key={project.name}>
                <ProjectsTitle>
                  <h1>{project.name}</h1>
                </ProjectsTitle>
                <ProjectsInfoContainer>
                  <ProjectsImgContainer>
                    <ProjectsImgSlider
                      drag="x"
                      dragConstraints={{ right: 0, left: 0 }}
                      style={{ x: dragX }}
                      onDragStart={onDragStart}
                      onDragEnd={onDragEnd}
                      animate={{ translateX: `-${imgIndex * 100}%` }}
                      transition={{ type: "tween" }}
                      whileTap={{ cursor: "grab" }}
                    >
                      {project.imgs.map((img, index) => (
                        <ProjectsImg bgphoto={img} key={index}></ProjectsImg>
                      ))}
                    </ProjectsImgSlider>
                    <ProjectsNumber>
                      <span>&#9001;</span>
                      <div>
                        <h3>{pageNum}</h3>
                        <h3>/{project.imgs.length}</h3>
                      </div>
                      <span>&#9002;</span>
                    </ProjectsNumber>
                  </ProjectsImgContainer>
                  <ProjectsInfo>
                    <ProjectsOverview>
                      <h1>{project.detail.overview}</h1>
                    </ProjectsOverview>
                    <ProjectsInfoTable>
                      <ProjectsTableList>
                        <SectionName>Key Feature</SectionName>
                        <SectionInfo>{project.detail.function}</SectionInfo>
                      </ProjectsTableList>
                      <ProjectsTableList>
                        <SectionName>GitHub</SectionName>
                        <SectionInfo>
                          <Link to={project.detail.github}>
                            {project.detail.github}
                          </Link>
                        </SectionInfo>
                      </ProjectsTableList>
                      <ProjectsTableList>
                        <SectionName>URL</SectionName>
                        <SectionInfo>
                          <button
                            onClick={() => {
                              window.open(project.detail.URL);
                            }}
                          >
                            {project.detail.URL}
                          </button>
                        </SectionInfo>
                      </ProjectsTableList>
                      <ProjectsTableList>
                        <SectionName>Skills</SectionName>
                        <SectionInfo>{project.detail.frontend}</SectionInfo>
                      </ProjectsTableList>
                      <ProjectsTableList>
                        <SectionName>Deployment</SectionName>
                        <SectionInfo>{project.detail.deployment}</SectionInfo>
                      </ProjectsTableList>
                    </ProjectsInfoTable>
                  </ProjectsInfo>
                </ProjectsInfoContainer>
              </ProjectsMain>
            ))}
          </ProjectsCol>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Projects;
