import styled from "styled-components";
import { MiniTopic } from "../../utils/TextStyles";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.5em;
  margin-top: 3em;

  > p {
    min-width: max-content;
  }
  p {
    margin: 0;
    width: -webkit-fit-content;
  }

  @media screen and (max-width: 1100px) {
    gap: 2em;
    margin-top: 2em;
  }

  @media screen and (max-width: 900px) {
    display: block;
    > p {
      width: 100%;
      margin-bottom: 1em;
    }
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  p {
    font-size: 0.85em;
    padding: 5px 10px;
    border: 1px dashed var(--main-color);
  }

  @media screen and (max-width: 550px) {
    gap: 8px;
    p {
      padding: 5px;
    }
  }
`;

const TechStack = ({ data }) => {
  return (
    <Wrapper>
      <MiniTopic>tech stack</MiniTopic>
      <SkillList>
        {data.map((s, idx) => {
          return (
            <p key={idx} className="text">
              {s}
            </p>
          );
        })}
      </SkillList>
    </Wrapper>
  );
};

export default TechStack;
