import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.5em 2em;
  border: 1px solid var(--main-color);
  text-align: justify;
  p {
    margin: 0;
  }
`;

const SmallWrapper = styled.div`
  padding: 1em;
  border: 1px solid var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  gap: 1em;
  & > * {
    margin: 0;
  }
  .bold {
    font-family: var(--text-bold);
  }

  p {
    font-size: 0.75em;
    color: var(--middle-grey);
  }

  span.bold {
    font-size: 1.2em;
  }
`;

const Box = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const SmallBox = ({ className, children }) => {
  return <SmallWrapper className={className}>{children}</SmallWrapper>;
};

export { Box, SmallBox };
