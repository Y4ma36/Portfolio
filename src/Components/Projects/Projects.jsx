import React, { useState } from "react";
import { MaxWidthWrapper, Title } from "../../Styles/CommonStyle";
import styled from "styled-components";
import { projects } from "../../utils/projects";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import PorjectsSlider from "./PorjectsSlider";

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

const Projects = () => {
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
              <PorjectsSlider key={project.name} project={project} />
            ))}
          </ProjectsCol>
        </Container>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Projects;
