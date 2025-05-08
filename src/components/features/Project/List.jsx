import styled from "styled-components";
import { projectList } from "../../../data";
import Image from "../../utils/Image";
import { Topic } from "../../utils/TextStyles";
import FocusText from "../../utils/FocusText";

const Wrapper = styled.div``;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledImage = styled(Image)`
  width: 100%;
  padding-bottom: 50%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--dark-blue);
`;

const ProjectDetail = styled.div`
  border: 1px solid var(--main-color);
  .description {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
  }
`;

const StyledTopic = styled(Topic)`
  padding: 1em;
  border-bottom: 1px solid var(--main-color);
  text-align: center;
`;

const Description = styled.div`
  // Locally scoped variables
  --gap: 3rem;
  --line-offset: calc(var(--gap) / 2);
  --line-thickness: 1px;

  display: grid;
  gap: var(--gap);
  grid-template-columns: 1.5fr 0.5fr;

  overflow: hidden;

  & > div {
    position: relative;
    padding: 2em;
  }

  & > div + div {
    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: var(--main-color);
      z-index: 1;
      top: 0;
    }

    // Column Borders
    &::before {
      inline-size: var(--line-thickness);
      inset-inline-start: calc(var(--line-offset) * -1);
      height: 100%;
    }
  }

  .content {
    text-align: justify;
    p {
      margin: 0;
    }
  }
  .tech {
    .div {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    p {
      margin: 0;
      display: flex;
      align-items: baseline;
      gap: 10px;

      &:before {
        font-size: 0.75em;
        content: "★";
      }
    }
  }
`;

const List = () => {
  return (
    <Wrapper>
      {projectList.map((item, idx) => {
        const { image, name, description, tech } = item;
        return (
          <Item key={idx}>
            <StyledImage url={image} />
            <ProjectDetail>
              <StyledTopic>
                <h2>
                  <FocusText color={"green"}>{name}</FocusText>
                </h2>
              </StyledTopic>
              <Description>
                <div className="content">
                  <p>{description}</p>
                </div>
                <div className="tech">
                  <div>
                    {tech.map((t, idx) => {
                      return <p key={idx}>{t}</p>;
                    })}
                  </div>
                </div>
              </Description>
            </ProjectDetail>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default List;
