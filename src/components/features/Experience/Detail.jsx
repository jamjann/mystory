import styled from "styled-components";
import { experienceList } from "../../../data";
import { Topic } from "../../utils/TextStyles";
import FocusText from "../../utils/FocusText";
import TechStack from "./TechStack";
import InfoList from "./InfoList";
import TaskList from "./TaskList";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0;
  flex-flow: column wrap;
  gap: 1em;

  @media screen and (max-width: 1800px) {
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const ContainerWrapper = styled.div`
  display: grid;
  gap: 4em;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;

  &.col {
    width: 100%;
    grid-template-columns: 0.75fr 0.25fr;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    gap: 2em;

    &.col {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }
  }

  @media screen and (max-width: 900px) {
    gap: 1.5em;
  }
`;

const StyledTopic = styled(Topic)`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  gap: 10px;

  @media screen and (max-width: 480px) {
    gap: 5px;
  }
`;

const Subtitle = styled.div`
  position: relative;
  .expand {
    border-bottom: 1px solid var(--main-color);
  }
`;

const Duration = styled.div`
  font-family: var(--text-bold);
  text-transform: uppercase;
  color: var(--middle-grey);
  font-size: 0.85em;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    margin-top: 5px;
  }
`;

const Detail = ({ id }) => {
  const { company, position } = experienceList[id];

  return (
    <Wrapper>
      {position?.map((p, idx) => {
        const { title, subtitle, info, duration, description, skill } = p;
        return (
          <Container key={idx}>
            <ContainerWrapper className={info && "col"}>
              <div key={idx}>
                <StyledTopic>
                  <h2>
                    <FocusText>{title}</FocusText>
                  </h2>
                  {subtitle ? (
                    <Subtitle>
                      in <span className="expand">{subtitle}</span> @ {company}
                    </Subtitle>
                  ) : (
                    <Subtitle> @ {company}</Subtitle>
                  )}
                </StyledTopic>
                <Duration>{duration}</Duration>
                <TaskList data={description} />
              </div>

              {info && <InfoList data={info} />}
            </ContainerWrapper>

            {skill && <TechStack data={skill} />}
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Detail;
