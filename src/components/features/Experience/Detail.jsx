import styled from "styled-components";
import { experienceList } from "../../../data";
import { Topic } from "../../utils/TextStyles";
import FocusText from "../../utils/FocusText";
import { SmallBox } from "../../utils/Box";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0;
  flex-flow: column wrap;
  gap: 1em;
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

  &.col {
    width: 100%;
    grid-template-columns: 0.75fr 0.25fr;
  }
`;
const StyledTopic = styled(Topic)`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  gap: 10px;
`;

const Subtitle = styled.div`
  position: relative;
  .expand {
    border-bottom: 1px solid var(--main-color);
  }
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
  display: flex;
  flex-flow: row wrap;
  text-align: justify;
  gap: 10px;
`;

const Point = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  p {
    margin: 0;
  }

  &:before {
    font-size: 0.75em;
    content: "★";
  }

  .content {
    margin-top: 10px;
    p {
      &:before {
        content: "•";
        margin-right: 5px;
      }
    }
  }
`;

const Info = styled.div`
  div {
    display: flex;
    gap: 5px;
  }
  p {
    font-size: 0.8em;
    color: var(--dark-beige);
    margin: 0;
    text-align: left;
  }
  .text {
    display: block;
    margin-top: 10px;
    text-align: justify;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 1.5em;
  font-size: 0.85em;
  margin-top: 3em;
  p {
    margin: 0;
    b {
      text-transform: uppercase;
    }
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-flow: row wrap;

  gap: 10px;
  p {
    padding: 5px 10px;
    border: 1px dashed var(--main-color);
  }
`;

const Detail = ({ id }) => {
  const { company, position } = experienceList[id];

  return (
    <Wrapper>
      {position?.map((p, idx) => {
        const { title, subtitle, info, duration, description, skill } = p;
        return (
          <Container>
            <ContainerWrapper className={info && "col"}>
              <div key={idx}>
                <StyledTopic>
                  <h2>
                    <FocusText>{title}</FocusText>
                  </h2>
                  {subtitle ? (
                    <Subtitle>
                      <h3>
                        in <span className="expand">{subtitle}</span> @{" "}
                        {company}
                      </h3>
                    </Subtitle>
                  ) : (
                    <Subtitle> @ {company}</Subtitle>
                  )}
                </StyledTopic>
                <Duration>{duration}</Duration>

                <Description>
                  {description.map((point, idx) => {
                    return (
                      <Point key={idx}>
                        <div>
                          <p>{point.text}</p>
                          {point.content && (
                            <div className="content">
                              {point.content.map((c) => {
                                return <p>{c}</p>;
                              })}
                            </div>
                          )}
                        </div>
                      </Point>
                    );
                  })}
                </Description>
              </div>
              {info && (
                <InfoList>
                  {info.map((i) => {
                    return (
                      <SmallBox>
                        <Info>
                          <div>
                            <span className="star">* </span>
                            <p className="bold">{i.title}</p>
                          </div>
                          <p className="text">{i.detail}</p>
                        </Info>
                      </SmallBox>
                    );
                  })}
                </InfoList>
              )}
            </ContainerWrapper>
            {skill && (
              <TechStack>
                <p>
                  <b>tech stack</b>
                </p>
                <SkillList>
                  {skill.map((s) => {
                    return <p className="text">{s}</p>;
                  })}
                </SkillList>
              </TechStack>
            )}
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Detail;
