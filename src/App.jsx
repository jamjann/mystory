import styled from "styled-components";
import "./App.css";
import { lazy, Suspense, useState, useCallback, useEffect } from "react";
import PageHeader from "./components/layout/PageHeader";
import PageFooter from "./components/layout/PageFooter";
import { Highlight } from "./components/utils/TextStyles";

import Modal from "./components/utils/Modal";
import Portfolio from "./components/features/Modal/Portfolio";
import Intro from "./components/features/Intro";
import { useScroll } from "./services/scroll";

const Experience = lazy(() => import("./components/features/Experience"));
const Project = lazy(() => import("./components/features/Project"));
const Paper = lazy(() => import("./components/features/Paper"));

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
const App = () => {
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const [isPageLoading, setIsPageLoading] = useState(true);
  const { enableScroll, disableScroll } = useScroll();

  const handleModal = useCallback(
    (id) => {
      disableScroll();
      setIsModalLoading(true);
      setIsModalActive(true);
      setActiveModal(id);

      // Debounce loading state
      setTimeout(() => setIsModalLoading(false), 500);
    },
    [disableScroll]
  );

  const handleCloseModal = useCallback(() => {
    enableScroll();
    setIsModalActive(false);
    setActiveModal(null);
  }, [enableScroll]);

  const renderLoader = useCallback(() => <p>Loading...</p>, []);

  const cacheImages = async (arr) => {
    const promises = await arr.map((src) => {
      return new Promise((res, rej) => {
        const img = new Image();
        img.src = src;
        img.onload = res();
        img.onerror = rej();
      });
    });

    await Promise.all(promises);

    setIsPageLoading(false);
  };

  useEffect(() => {
    const images = [
      "/images/srcset/paper-680w.webp",
      "/images/srcset/jamjann-960w.webp",
      "/images/srcset/experience/current-960w.webp",
      "/images/srcset/projects/weather-960w.webp",
    ];

    cacheImages(images);
  }, []);

  return (
    <PageWrapper>
      {isPageLoading ? (
        <p>loadingggg</p>
      ) : (
        <Suspense fallback={renderLoader()}>
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
                  <Project onHandleModal={() => handleModal("portfolio")} />
                </PageContent>
                <PageFooter />
              </Area>
            </Container>
          </Paper>
        </Suspense>
      )}

      {isModalActive && (
        <Modal onClose={handleCloseModal} isLoading={isModalLoading}>
          {activeModal === "portfolio" && <Portfolio />}
        </Modal>
      )}
    </PageWrapper>
  );
};

export default App;
