import styled from "styled-components";
import Image from "../../utils/Image";
import { useState } from "react";
import Detail from "./Detail";
import { experienceList } from "../../../data";
import { Head } from "../../utils/TextStyles";
import PositionList from "./PositionList";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  gap: 2em;
  grid-template-areas: "image experience";

  @media screen and (max-width: 1500px) {
    gap: 2em;
    grid-template-areas:
      "image"
      "experience";
    grid-template-rows: 200px auto;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 900px) {
    grid-template-rows: 400px auto;
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: 300px auto;
  }
`;

const ImageCol = styled.div`
  grid-area: image;
`;
const ExperienceCol = styled.div`
  grid-area: experience;
`;

const ContentArea = styled.div`
  display: grid;
  gap: 1em;
`;

const ImageArea = styled(Image)`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 3em;
  min-height: 40vh;

  @media screen and (max-width: 1800px) {
    display: grid;
    grid-template-columns: initial;
    grid-template-rows: auto 1fr;
    gap: 2em;
    min-height: 35vh;
  }
`;

const Experience = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClickItem = (idx) => {
    console.log("idx", idx);
    setActiveItem(idx);
  };

  return (
    <Wrapper>
      <ImageCol>
        <ImageArea url={experienceList[activeItem].image} />
      </ImageCol>

      <ExperienceCol>
        <ContentArea>
          <Head>
            <h3 className="bold">Experience</h3>
          </Head>
          <Content>
            <PositionList onClick={handleClickItem} activeItem={activeItem} />
            <Detail id={activeItem} />
          </Content>
        </ContentArea>
      </ExperienceCol>
    </Wrapper>
  );
};

export default Experience;
