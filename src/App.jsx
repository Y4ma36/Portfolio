import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Shared/Header";
import GlobalStyle from "./Styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
import { Introduction } from "./Components/Intro/Introduction";
import AboutMe from "./Components/Aboutme/AboutMe";
import Skills from "./Components/Skills/Skills";
import Archiving from "./Components/Archiving/Archiving";
import Projects from "./Components/Projects/Projects";
import Footer from "./Shared/Footer";

const Container = styled.div``;

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Container>
          <Introduction />
          <AboutMe />
          <Skills />
          <Archiving />
          <Projects />
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
