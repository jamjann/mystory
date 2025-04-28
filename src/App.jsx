import styled from "styled-components";
import "./App.css";
import PageHeader from "./components/layout/PageHeader";
import Paper from "./components/features/Paper";
import { Highlight } from "./components/utils/TextStyles";
import Intro from "./components/features/Intro";
import Experience from "./components/features/Experience/";
import Project from "./components/features/Project";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark-grey);
`;

const Container = styled.div`
  padding: 3em;
  overflow: hidden;
  height: 100%;
`;

const Area = styled.div`
  display: grid;
  gap: 2em;
  height: 100%;
`;

const PageContent = styled.div`
  display: grid;
  gap: 3em;
`;

const App = () => {
  return (
    <PageWrapper>
      <Paper>
        <Container>
          <Area>
            <PageHeader />
            <PageContent>
              <Highlight>
                <h2> - Girl who loves eating while coding -</h2>
              </Highlight>

              <Intro />

              <Experience />

              <Project />
            </PageContent>
          </Area>
        </Container>
      </Paper>
    </PageWrapper>
  );
};

export default App;
