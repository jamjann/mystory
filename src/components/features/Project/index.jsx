import styled from "styled-components";
import { Head } from "../../utils/TextStyles";
import Book from "./Book";
import Card from "./Card";
import Poster from "./Poster";
import { certificationList, educationList } from "../../../data";
import List from "./List";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.8fr 1fr;
  gap: 2em;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 1em;
`;

const Main = styled.div``;

const LeftCol = styled.div`
  display: flex;
  gap: 2em;
  flex-flow: column wrap;
`;

const RightCol = styled.div``;

const Certification = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 1.5em;
`;

const Project = () => {
  return (
    <Wrapper>
      <LeftCol>
        <Card title="Education" data={educationList} />
        <Book
          link="#"
          tag="limited edition"
          title="Portfolio"
          subtitle="Phatthawipha Jeamburanakul"
        />
      </LeftCol>

      <Content>
        <Head>
          <h3>Pet projects</h3>
        </Head>
        <Main>
          <List />
        </Main>
      </Content>

      <RightCol>
        <Certification>
          {certificationList.map((item, idx) => {
            const { type, topic, link, fields } = item;
            return (
              <Poster
                key={idx}
                idx={idx}
                type={type}
                topic={topic}
                link={link}
                data={fields}
              />
            );
          })}
        </Certification>
      </RightCol>
    </Wrapper>
  );
};

export default Project;
