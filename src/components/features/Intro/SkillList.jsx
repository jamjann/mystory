import styled from "styled-components";
import { skillList } from "../../../data";
import { Highlight, MiniTopic, SubHighlight } from "../../utils/TextStyles";

const Wrapper = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;
`;

const Head = styled.div``;
const List = styled.div`
  display: grid;
  gap: 1.5em;
`;

const Type = styled.div`
  width: 100%;
  display: grid;
  align-items: baseline;
  grid-template-columns: max-content 1fr;
  gap: 10px;
`;

const Skills = styled.div``;
const Skill = styled.div`
  width: 100%;
  display: grid;
  align-items: baseline;
  grid-template-columns: 1fr max-content;
  gap: 10px;
  p {
    font-size: 0.85em;
    margin: 0;
  }
`;

const Dotted = styled.span`
  width: 100%;
  border-bottom: 2px dotted var(--middle-grey);

  @media screen and (max-width: 480px) {
    border-bottom-width: 1px;
  }
`;

const SkillList = () => {
  return (
    <Wrapper>
      <Head>
        <Highlight>
          <h4>some technologies</h4>
        </Highlight>
        <SubHighlight>
          <p>I've been working with</p>
        </SubHighlight>
      </Head>

      <List>
        {Object.keys(skillList).map((type, id) => {
          return (
            <div key={id}>
              <Type>
                <MiniTopic>{type}</MiniTopic>
                <Dotted />
              </Type>
              <Skills>
                {skillList[type].map((skill, idx) => {
                  return (
                    <Skill key={idx}>
                      <Dotted />
                      <p>{skill}</p>
                    </Skill>
                  );
                })}
              </Skills>
            </div>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default SkillList;
