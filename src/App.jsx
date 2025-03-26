import styled from "styled-components";
import "./App.css";
import PageHeader from "./components/layout/PageHeader";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark-grey);
`;

const Paper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 85%;
  height: 85%;
  background-color: var(--beige);
  background-image: url("/src/assets/images/paper.png");
  background-size: contain;
  border-radius: 2px 2px 20px 10px;
  z-index: 2;
`;

const Container = styled.div`
  padding: 3em;
`;

const Sub = styled.div`
  width: 84.5%;
  height: 85%;
  position: absolute;
  background-color: var(--middle-dark-cream);
  transform: skewX(1deg) translate(7px, -8px) rotate(-0.8deg);
  border-radius: 2px;
  z-index: 1;
`;
const Sub2 = styled.div`
  width: 86%;
  height: 86%;
  position: absolute;
  background-color: var(--dark-cream);
  transform: translate(12px, -17px) rotate(-1deg);
  border-radius: 2px;
  z-index: 0;
`;

const PageContent = styled.div``;

const App = () => {
  return (
    <PageWrapper>
      <Paper>
        <Main>
          <Container>
            <PageHeader />
          </Container>
        </Main>
        <Sub></Sub>
        <Sub2></Sub2>
      </Paper>
    </PageWrapper>
  );
};

export default App;
