import styled from "styled-components";
import { MiniTopic } from "./TextStyles";

const Wrapper = styled.div`
  border: 1px solid var(--main-color);
  display: grid;
  align-items: center;
  text-align: justify;
  grid-template-columns: 0.5fr 2fr;
  line-height: normal;
`;

const Title = styled.div`
  padding: 1em;
  text-transform: uppercase;
  font-family: var(--text-bold);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Value = styled.div`
  padding: 1em;
  text-align: center;
  font-family: var(--text-medium);
  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid var(--main-color);

  p {
    margin: 0;
  }
`;

const Field = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>
        <MiniTopic>{title}</MiniTopic>
      </Title>
      <Value>{children}</Value>
    </Wrapper>
  );
};

export default Field;
