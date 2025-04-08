import styled from "styled-components";
import Image from "../../utils/Image";
import { useState } from "react";
import List from "./List";
import Detail from "./Detail";
import { experienceList } from "../../../data";

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

const Head = styled.div`
  padding: 5px 0;
  text-align: center;
  border-top: 3px solid var(--main-color);
  border-bottom: 3px solid var(--main-color);

  h3 {
    margin: 0;
    text-transform: uppercase;
    font-family: var(--text-header);
    letter-spacing: 3px;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
    padding: 0.5em;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2em;
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
