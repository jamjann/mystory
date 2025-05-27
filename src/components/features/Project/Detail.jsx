import styled from "styled-components";
import { projectList } from "../../../data";
import Image from "../../utils/Image";
import { MiniTopic, Topic } from "../../utils/TextStyles";
import FocusText from "../../utils/FocusText";
import ImageFilter from "../../utils/ImageFilter";

const Wrapper = styled.div``;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ImageBlock = styled.div`
  overflow: hidden;
  background-color: var(--main-color);
  position: relative;
`;
const StyledImage = styled(Image)`
  width: 100%;
  padding-bottom: 52%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &.loading {
    filter: blur(2px);
  }
  &.active {
    filter: blur(0);
    transition: background-image 0.5s ease-in-out 0.2s;
    -webkit-transition: background-image 0.5s ease-in-out 0.2s;
  }

  @media screen and (max-width: 900px) {
    padding-bottom: 60%;
  }
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
  grid-template-columns: 2fr 0.5fr;
  overflow: hidden;

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

  @media screen and (max-width: 900px) {
    gap: 0;
    grid-template-columns: 1fr;

    & > div + div {
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

const Content = styled.div`
  position: relative;
  padding: 1.5em 2em;
  text-align: justify;
  p {
    margin: 0;
  }
  p + p {
    margin-top: 8px;
  }

  @media screen and (max-width: 900px) {
    border-bottom: 1px solid var(--main-color);
  }
`;

const TechStack = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .list p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85em;

    &:before {
      font-size: 0.75em;
      content: "★";
    }
  }

  @media screen and (max-width: 900px) {
    padding: 1em;
    justify-content: center;

    & > div {
      flex-direction: row;
      justify-content: center;
      gap: 1em;
    }
    p {
      gap: 5px;
    }
  }
`;

const Detail = ({ id, isLoading }) => {
  const { image, name, description, tech } = projectList[id];

  return (
    <Wrapper>
      <Item>
        <ImageBlock>
          <ImageFilter />
          <StyledImage
            url={image}
            className={!isLoading ? "active" : "loading"}
          />
        </ImageBlock>

        <ProjectDetail>
          <StyledTopic>
            <h2>
              <FocusText color={"green"}>{name}</FocusText>
            </h2>
          </StyledTopic>
          <Description>
            <Content>
              <MiniTopic>Description:</MiniTopic>
              <p>{description}</p>
            </Content>
            <TechStack>
              <div className="list">
                {tech.map((t, idx) => {
                  return <p key={idx}>{t}</p>;
                })}
              </div>
            </TechStack>
          </Description>
        </ProjectDetail>
      </Item>
    </Wrapper>
  );
};

export default Detail;
