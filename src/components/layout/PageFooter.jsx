import styled from "styled-components";
import TextWithLine from "../utils/TextWithLine";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1em;
`;

const StyledTextWithLine = styled(TextWithLine)`
  span {
    height: 3px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    grid-template-columns: 1fr;
    text-align: center;

    span {
      height: 2px;
    }
  }
`;

const PageFooter = () => {
  return (
    <Wrapper>
      <StyledTextWithLine
        type="small"
        text="Handcrafted by me © Phatthawipha J. 2025"
      />
    </Wrapper>
  );
};
export default PageFooter;
