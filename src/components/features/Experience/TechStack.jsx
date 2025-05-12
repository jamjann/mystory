import styled from "styled-components";
import { MiniTopic } from "../../utils/TextStyles";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 1.5em;
  margin-top: 3em;

  p {
    margin: 0;
  }

  @media screen and (max-width: 1100px) {
    gap: 2em;
    margin-top: 2em;
  }

  @media screen and (max-width: 900px) {
    gap: 1em;
    margin-top: 1.5em;
    grid-template-columns: auto;
    grid-template-rows: auto;
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

  @media screen and (max-width: 480px) {
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
