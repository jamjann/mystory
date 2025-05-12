import styled from "styled-components";
import { SmallBox } from "../../utils/Box";
import Image from "../../utils/Image";
import Field from "../../utils/Field";
import SkillList from "./SkillList";
import Hobby from "./Hobby";
import Basic from "./Basic";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.65fr auto 0.4fr;
  gap: 3em;
  grid-template-areas: "skill basic photo hobby";

  @media screen and (max-width: 1500px) {
    gap: 2em;
    grid-template-areas:
      "basic basic basic photo"
      "skill skill hobby hobby";
    grid-template-rows: auto auto;
    grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
  }

  @media screen and (max-width: 1100px) {
    gap: 3em;
    grid-template-areas:
      "basic basic basic"
      "skill skill skill"
      "photo hobby hobby";
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 0.4fr 0.1fr 0.5fr;
  }

  @media screen and (max-width: 900px) {
    gap: 2em;
    grid-template-areas:
      "basic basic basic"
      "skill skill skill"
      "photo photo photo"
      "hobby hobby hobby";
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 0.4fr 0.1fr 0.5fr;
  }
`;

const SkillCol = styled.div`
  grid-area: skill;
`;
const BasicCol = styled.div`
  grid-area: basic;
`;
const PhotoCol = styled.div`
  grid-area: photo;
`;
const HobbyCol = styled.div`
  grid-area: hobby;
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

  @media screen and (max-width: 1100px) {
    gap: 1em;
    &.etc {
      padding-right: 0;
      border-right: none;
    }
  }
`;

const MainPhoto = styled(Image)`
  width: 100%;
  padding-bottom: 100%;
`;

const StyledSmallBox = styled(SmallBox)`
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <SkillCol>
        <ContentArea className="etc">
          <SkillList />
        </ContentArea>
      </SkillCol>

      <BasicCol>
        <Basic />
      </BasicCol>

      <PhotoCol>
        <MainPhoto
          url="/src/assets/images/jamjann.jpg"
          caption="Phatthawipha and her chilled days in Whistler, British
          Columbia, Canada"
        />
      </PhotoCol>

      <HobbyCol>
        <ContentArea>
          <Field title="email" color="pink">
            <a href="mailto:im@jamjann.dev">im@jamjann.dev</a>
          </Field>
          <StyledSmallBox>
            <p>
              <span className="star">* </span>
              <b>
                I know it is quite hard to pronouce my name, so you can also
                call me
              </b>
              <span className="bold"> " JAN "</span>
            </p>
          </StyledSmallBox>
          <Hobby />
        </ContentArea>
      </HobbyCol>
    </Wrapper>
  );
};

export default Intro;
