import styled from "styled-components";
import { skillList } from "../../../data";
import { Highlight, SubHighlight } from "../../utils/TextStyles";

const Wrapper = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;
`;

const List = styled.div`
  display: grid;
  gap: 1.5em;
`;

const Type = styled.div`
  width: 100%;
  display: grid;
  align-items: baseline;
  grid-template-columns: auto 1fr;
  gap: 10px;
  p {
    font-family: var(--text-bold);
    text-transform: uppercase;
    margin: 0;
    font-size: 0.85em;
  }
  span {
    width: 100%;
    border-bottom: 2px dotted var(--middle-grey);
  }
`;

const Item = styled.div`
  width: 100%;
  display: grid;
  align-items: baseline;
  grid-template-columns: 1fr auto;
  gap: 10px;
  p {
    font-size: 0.85em;
    margin: 0;
  }
  span {
    width: 100%;
    border-bottom: 2px dotted var(--middle-grey);
  }
`;

const SkillList = () => {
  return (
    <Wrapper>
      <div>
        <Highlight>
          <h4>some technologies</h4>
        </Highlight>
        <SubHighlight>
          <p>I've been working with</p>
        </SubHighlight>
      </div>
      <List>
        {Object.keys(skillList).map((type, id) => {
          return (
            <div key={id}>
              <Type>
                <p>{type}</p>
                <span></span>
              </Type>
              {skillList[type].map((skill, idx) => {
                return (
                  <Item key={idx}>
                    <span></span>
                    <p>{skill}</p>
                  </Item>
                );
              })}
            </div>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default SkillList;
