import styled from "styled-components";
import { Box, SmallBox } from "../utils/Box";
import Image from "../utils/Image";
import FocusArea from "../utils/FocusArea";
import { Highlight, Paragraph, SubHighlight, Topic } from "../utils/TextStyles";
import FocusText from "../utils/FocusText";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr 0.7fr 0.4fr;
  gap: 3em;
`;

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;

  &.etc {
    padding-right: 3em;
    border-right: 1px solid var(--main-color);
  }
`;

const MainArea = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;
`;

const MainPhoto = styled(Image)`
  width: 100%;
  padding-bottom: 100%;
`;

const SkillList = styled.div`
  margin: 0;
  .list {
    margin-bottom: 1em;
  }
  .type {
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
  }
  .item {
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
  }
`;

const Part = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;
`;

const StyledFocusArea = styled(FocusArea)`
  position: relative;
  .star {
    position: absolute;
    top: 0;
    left: -15px;
  }
`;

const Intro = () => {
  const skills = {
    language: ["JavaScript", "TypeScript", "Ruby", "C#", "PHP"],
    "library & framework": [
      "React",
      "Vue.js",
      "Ruby on Rails",
      "Node.js",
      "Express.js",
    ],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
  };

  return (
    <Wrapper>
      <ContentArea className="etc">
        <SmallBox>
          <p>
            <span className="star">* </span>
            <b>
              I know it is quite hard to pronouce my name, so you can also call
              me
            </b>
            <span className="bold"> " JAN "</span>
          </p>
        </SmallBox>
        <Part>
          <div>
            <Highlight>
              <h4>some technologies</h4>
            </Highlight>
            <SubHighlight>
              <p>I've been working with</p>
            </SubHighlight>
          </div>
          <div>
            <SkillList>
              {Object.keys(skills).map((type, id) => {
                return (
                  <div className="list" key={id}>
                    <div className="type">
                      <p>{type}</p>
                      <span></span>
                    </div>
                    {skills[type].map((skill, idx) => {
                      return (
                        <div className="item" key={idx}>
                          <span></span>
                          <p>{skill}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </SkillList>
          </div>
        </Part>
      </ContentArea>

      <MainArea>
        <Topic>
          <h2>Hello! my name is</h2>
          <StyledFocusArea>
            <span className="star">* </span>
            <h2 className="bold name">Phatthawipha Jeamburanakul ,</h2>
          </StyledFocusArea>
        </Topic>

        <Box>
          <p>
            <b>
              I'm <FocusText color="green">a software engineer</FocusText> based
              in Vancouver, Canada. Currently, I'm a freelance{" "}
              <FocusText color="green">full-stack developer</FocusText> with
              over 10 years of diverse commercial experience and a demonstrated
              history of working in the{" "}
              <FocusText color="orange">startup</FocusText> and{" "}
              <FocusText color="orange">design industry</FocusText>.
            </b>
          </p>
        </Box>

        <Paragraph>
          <p>
            Throughout my career, I've worked with businesses of all scales to
            initiate and contribute to successful projects, including{" "}
            <FocusText color="pink">
              consulting, designing, and developing
            </FocusText>{" "}
            websites, mobile applications, and internal systems that meet my
            customers' requirements and the end users' needs.
          </p>
          <p>
            I'm passionate about using my knowledge to create something new for
            society and the world. I also love challenging myself by
            accomplishing things beyond my familiarity and outside my comfort
            zone.
          </p>
        </Paragraph>
      </MainArea>

      <MainPhoto
        url="/src/assets/images/jamjann.jpg"
        caption="Phatthawipha and her chilled days in Whistler, British
          Columbia, Canada"
      />

      <ContentArea>
        <Part>
          <Highlight>
            <h4>Outside of work</h4>
          </Highlight>
          <Paragraph>
            <p>
              I'm interested in boosting my new skill set and doing some fun
              stuff.
            </p>
            <p>
              Recently, I've been enjoyed and obsessed with hiking, being a
              street photographer, running an online business, oh, and also
              being a part-time pet sitter caring for little cuties' fur babies
              as well.
            </p>
          </Paragraph>
        </Part>
      </ContentArea>
    </Wrapper>
  );
};

export default Intro;
