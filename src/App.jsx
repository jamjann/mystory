import styled from "styled-components";
import "./App.css";
import { lazy, Suspense, useState } from "react";
import PageHeader from "./components/layout/PageHeader";
import PageFooter from "./components/layout/PageFooter";
import Paper from "./components/features/Paper";
import { Highlight } from "./components/utils/TextStyles";

import Modal from "./components/utils/Modal";
import Portfolio from "./components/features/Modal/Portfolio";
import Intro from "./components/features/Intro";
import { useScroll } from "./services/scroll";

const Experience = lazy(() => import("./components/features/Experience"));
const Project = lazy(() => import("./components/features/Project"));
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark-grey);
`;

const Container = styled.div`
  padding: 3em;
  overflow: hidden;
  height: 100%;

  @media screen and (max-width: 550px) {
    padding: 2em;
  }
  @media screen and (max-width: 360px) {
    padding: 1em;
  }
`;

const Area = styled.div`
  display: grid;
  gap: 2em;
  height: 100%;

  @media screen and (max-width: 1000px) {
    gap: 0em;
  }
`;

const PageContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 3em;

  @media screen and (max-width: 1000px) {
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
  @media screen and (max-width: 550px) {
    h2 {
      font-size: 1em;
      width: 100%;
    }
  }
`;

const renderLoader = () => <p>Loading</p>;

const App = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { enableScroll, disableScroll } = useScroll();

  const handleModal = (id) => {
    disableScroll();
    setIsLoading(true);
    setIsModalActive(true);
    setActiveModal(id);

    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCloseModal = () => {
    enableScroll();
    setIsModalActive(false);
    setActiveModal(null);
  };

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

              <Suspense fallback={renderLoader()}>
                <Intro />
                {/* 
              <Experience />

              <Project onHandleModal={() => handleModal("portfolio")} /> */}
              </Suspense>
            </PageContent>
            <PageFooter />
          </Area>
        </Container>
      </Paper>

      {isModalActive && (
        <Modal onClose={handleCloseModal} isLoading={isLoading}>
          {activeModal === "portfolio" && <Portfolio />}
        </Modal>
      )}
    </PageWrapper>
  );
};

export default App;
