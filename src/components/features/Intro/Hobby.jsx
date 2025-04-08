import styled from "styled-components";
import { Highlight, Paragraph } from "../../utils/TextStyles";

const Wrapper = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;
`;

const Hobby = () => {
  return (
    <Wrapper>
      <Highlight>
        <h4>Outside of work</h4>
      </Highlight>
      <Paragraph>
        <p>
          I'm interested in boosting my new skill set and doing some fun stuff.
        </p>
        <p>
          Recently, I've been enjoyed and obsessed with hiking, being a street
          photographer, running an online business, oh, and also being a
          part-time pet sitter caring for little cuties' fur babies as well.
        </p>
      </Paragraph>
    </Wrapper>
  );
};

export default Hobby;
