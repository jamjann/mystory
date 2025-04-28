import styled from "styled-components";
import { Highlight } from "../../utils/TextStyles";
import Book from "./Book";
import Card from "./Card";
import Poster from "./Poster";
import { certificationList, educationList } from "../../../data";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.8fr 1fr;
  gap: 2em;
`;

const List = styled.div`
  border: 1px solid var(--main-color);
`;

const Main = styled.div`
  padding: 1em;
`;
const Block = styled.div``;

const LeftCol = styled.div`
  display: grid;
  gap: 2em;
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

      <List>
        <Highlight>
          <h3>Pet projects</h3>
        </Highlight>
        <Main>
          <Block>
            <div>
              <h3>Lorem</h3>
              <p></p>
            </div>
          </Block>
        </Main>
      </List>

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
