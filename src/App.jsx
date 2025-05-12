import styled from "styled-components";
import "./App.css";
import PageHeader from "./components/layout/PageHeader";
import Paper from "./components/features/Paper";
import { Highlight } from "./components/utils/TextStyles";
import Intro from "./components/features/Intro";
import Experience from "./components/features/Experience/";
import Project from "./components/features/Project";
import PageFooter from "./components/layout/PageFooter";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark-grey);
`;

const Container = styled.div`
  padding: 3em;
  overflow: hidden;
  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 2em;
  }
`;

const Area = styled.div`
  display: grid;
  gap: 3em;
  height: 100%;

  @media screen and (max-width: 900px) {
    gap: 0em;
  }
`;

const PageContent = styled.div`
  display: grid;
  gap: 3em;

  @media screen and (max-width: 1500px) {
    gap: 2em;
  }
  @media screen and (max-width: 900px) {
    gap: 3em;
    margin-top: 2em;
  }
`;

const StyledHighlight = styled(Highlight)`
  @media screen and (max-width: 900px) {
    h2 {
      width: 30ch;
      margin: auto;
    }
  }
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 1em;
      width: 100%;
    }
  }
`;

const App = () => {
  return (
    <PageWrapper>
      <Paper>
        <Container>
          <Area>
            <PageHeader />
            <PageContent>
              <StyledHighlight>
                <h2> - Girl who loves eating while coding -</h2>
              </StyledHighlight>

              <Intro />

              <Experience />

              <Project />
            </PageContent>
            <PageFooter />
          </Area>
        </Container>
      </Paper>
    </PageWrapper>
  );
};

export default App;
