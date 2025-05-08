import styled from "styled-components";
import Image from "../../utils/Image";
import { useState } from "react";
import List from "./List";
import Detail from "./Detail";
import { experienceList } from "../../../data";
import { Head } from "../../utils/TextStyles";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.8fr;
  gap: 2em;
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
  min-height: 38vh;

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
      <ImageArea url={experienceList[activeItem].image} />

      <ContentArea>
        <Head>
          <h3 className="bold">Experience</h3>
        </Head>
        <Content>
          <List onClick={handleClickItem} activeItem={activeItem} />
          <Detail id={activeItem} />
        </Content>
      </ContentArea>
    </Wrapper>
  );
};

export default Experience;
