import styled from "styled-components";
import { Head } from "../../utils/TextStyles";
import Book from "./Book";
import Card from "./Card";
import { certificationList, educationList } from "../../../data";
import Detail from "./Detail";
import CertificationList from "./CertificationList";
import { useState } from "react";
import Carousel from "./Carousel";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.8fr 1fr;
  grid-template-areas: "education project certification";
  gap: 2em;

  @media screen and (max-width: 1500px) {
    grid-template-areas: "education" "project" "certification";
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 900px) {
    gap: 0;
  }
`;

const EducationCol = styled.div`
  grid-area: education;
`;
const ProjectCol = styled.div`
  grid-area: project;
`;
const CertificationCol = styled.div`
  grid-area: certification;
  position: relative;
  display: grid;

  @media screen and (max-width: 900px) {
    padding: 3em 0;
  }
`;

const EducationContainer = styled.div`
  display: grid;
  gap: 2em;
  grid-template-rows: auto auto;
  grid-template-areas:
    "card"
    "book";

  @media screen and (max-width: 1500px) {
    gap: 3em;
    grid-template-areas: "card book";
    grid-template-rows: auto;
    grid-template-columns: 0.75fr 0.25fr;
    align-items: end;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 0.65fr 0.35fr;
  }
  @media screen and (max-width: 900px) {
    gap: 0;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "card"
      "book";
  }
`;

const CardCol = styled.div`
  grid-area: card;
`;
const BookCol = styled.div`
  grid-area: book;
  position: relative;

  @media screen and (max-width: 900px) {
    padding: 3em 0;
  }
`;
const BookContainer = styled.div`
  @media screen and (max-width: 900px) {
    width: 50%;
    z-index: 3;
    margin: auto;
    position: relative;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 1em;
`;

const Main = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 1em;
`;

const Bg = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    opacity: 0.6;
    background-image: radial-gradient(rgb(17 17 17 / 40%) 1px, #ffffff00 1px);
    background-size: 30px 30px;
  }
`;

const Project = ({ onHandleModal }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleClickItem = (idx) => {
    console.log("idx", idx);
    setActiveItem(idx);
  };

  return (
    <Wrapper>
      <EducationCol>
        <EducationContainer>
          <CardCol>
            <Card title="Education" data={educationList} />
          </CardCol>
          <BookCol>
            <BookContainer>
              <Book
                link="#"
                tag="limited edition"
                title="Portfolio"
                subtitle="Phatthawipha Jeamburanakul"
                onClick={onHandleModal}
              />
            </BookContainer>
            <Bg />
          </BookCol>
        </EducationContainer>
      </EducationCol>

      <ProjectCol>
        <Content>
          <Head>
            <h3>Pet projects</h3>
          </Head>
          <Main>
            <Detail id={activeItem} />
            <Carousel onClick={handleClickItem} activeItem={activeItem} />
          </Main>
        </Content>
      </ProjectCol>

      <CertificationCol>
        <CertificationList data={certificationList} />
        <Bg />
      </CertificationCol>
    </Wrapper>
  );
};

export default Project;
