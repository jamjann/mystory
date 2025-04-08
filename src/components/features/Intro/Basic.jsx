import styled from "styled-components";
import { Paragraph, Topic } from "../../utils/TextStyles";
import { Box } from "../../utils/Box";
import FocusArea from "../../utils/FocusArea";
import FocusText from "../../utils/FocusText";

const Wrapper = styled.div`
  width: 100%;
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

const Basic = () => {
  return (
    <Wrapper>
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
            <FocusText color="green">full-stack developer</FocusText> with over
            10 years of diverse commercial experience and a demonstrated history
            of working in the <FocusText color="orange">startup</FocusText> and{" "}
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
          society and the world. I also love challenging myself by accomplishing
          things beyond my familiarity and outside my comfort zone.
        </p>
      </Paragraph>
    </Wrapper>
  );
};

export default Basic;
