import styled from "styled-components";
import { SmallBox } from "../../utils/Box";
import Image from "../../utils/Image";
import Field from "../../utils/Field";
import SkillList from "./SkillList";
import Hobby from "./Hobby";
import Basic from "./Basic";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr auto 0.4fr;
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

const MainPhoto = styled(Image)`
  width: 100%;
  padding-bottom: 100%;
`;

const Intro = () => {
  return (
    <Wrapper>
      <ContentArea className="etc">
        <SkillList />
      </ContentArea>

      <Basic />

      <MainPhoto
        url="/src/assets/images/jamjann.jpg"
        caption="Phatthawipha and her chilled days in Whistler, British
          Columbia, Canada"
      />

      <ContentArea>
        <Field title="email" color="pink">
          <a href="mailto:phatthawipha.j@gmail.com">phatthawipha.j@gmail.com</a>
        </Field>
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
        <Hobby />
      </ContentArea>
    </Wrapper>
  );
};

export default Intro;
