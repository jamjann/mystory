import styled from "styled-components";
import { experienceList } from "../../../data";
import { Topic } from "../../utils/TextStyles";
import FocusText from "../../utils/FocusText";

const Wrapper = styled.div`
  padding: 2em;
  flex-flow: column wrap;
  gap: 2em;
  display: grid;
`;

const Duration = styled.div`
  font-family: var(--text-medium);
  text-transform: uppercase;
  color: var(--middle-grey);
  font-size: 0.85em;
  margin-top: 10px;
`;

const Description = styled.div`
  margin-top: 1.5em;

  .point {
    &:before {
      content: "★";
      margin-right: 5px;
    }
  }
`;

const StyledTopic = styled(Topic)`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  gap: 10px;
`;

const Detail = ({ id }) => {
  const { company, position } = experienceList[id];

  return (
    <Wrapper>
      {position?.map((p, idx) => {
        const { title, subtitle, duration, description } = p;
        return (
          <div key={idx}>
            <StyledTopic>
              <h2>
                <FocusText>{title}</FocusText>
              </h2>
              {subtitle ? (
                <h3>
                  in {subtitle} @ {company}
                </h3>
              ) : (
                <h3> @ {company}</h3>
              )}
            </StyledTopic>
            <Duration>{duration}</Duration>

            <Description>
              {description.map((point, idx) => {
                return (
                  <div className="point" key={idx}>
                    {point}
                  </div>
                );
              })}
            </Description>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Detail;
