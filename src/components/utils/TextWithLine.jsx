import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 0.5fr auto 0.5fr;
  gap: 1em;

  &.mini {
    font-size: 0.6em;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: var(--text-medium);
  }

  &.small {
    font-size: 0.8em;
    font-family: var(--text-medium);
  }

  &.normal {
    font-size: 1em;
    font-family: var(--text-medium);
  }
`;

const Line = styled.span`
  width: 100%;
  height: 1px;
  background-color: var(--main-color);
`;

const TextWithLine = ({ className, type = "normal", text }) => {
  return (
    <Wrapper className={`${type} ${className && className}`}>
      <Line />
      <div>{text}</div>
      <Line />
    </Wrapper>
  );
};

export default TextWithLine;
