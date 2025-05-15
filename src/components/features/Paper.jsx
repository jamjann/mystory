import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 3em 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 85%;
  max-width: 2000px;
  /* height: 100%;
  min-height: 85%; */
  position: relative;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--beige);
  background-image: url("/src/assets/images/paper.png");
  background-size: contain;
  border-radius: 2px;
  z-index: 3;
`;

const Sub = styled.div`
  width: 100%;
  height: 96%;
  position: absolute;
  background-image: url("/src/assets/images/paper.png");
  background-size: contain;
  background-color: var(--middle-dark-cream);
  transform: skewX(-2deg) rotate(-0deg);
  border-radius: 2px;
  z-index: 2;
  left: 20px;
  bottom: 0;
`;
const Sub2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("/src/assets/images/paper.png");
  background-size: contain;
  background-color: var(--dark-cream);
  transform: rotate(-1deg);
  border-radius: 2px;
  z-index: 1;
  left: -25px;
  bottom: 18px;
`;

const Sub3 = styled.div`
  width: 103%;
  height: 100%;
  position: absolute;
  background-image: url("/src/assets/images/paper.png");
  background-size: contain;
  background-color: var(--dark-beige);
  transform: skewX(-0.5deg);
  border-radius: 2px;
  z-index: 0;
  left: -30px;
  bottom: 15px;
`;

const Paper = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Main>{children}</Main>
        <Sub></Sub>
        <Sub2></Sub2>
        <Sub3></Sub3>
      </Container>
    </Wrapper>
  );
};

export default Paper;
