import styled from "styled-components";
import FocusText from "../../utils/FocusText";
import { MiniTopic } from "../../utils/TextStyles";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Head = styled.div`
  h3 {
    margin: 0;
    font-family: var(--text-header);
    letter-spacing: 3px;
    text-transform: uppercase;
    display: block;
    width: fit-content;
    padding: 10px 30px;
    background-color: var(--main-color);
    color: white;
    border-radius: 5px 5px 0 0;
    font-size: 1em;
  }
`;

const Content = styled.div`
  padding: 2em;
  border: 1px solid var(--main-color);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding-bottom: calc(1em + 5px);
  border-bottom: 1px solid var(--light-grey);
  gap: 5px;
`;

const Topic = styled.h3`
  width: 100%;
  font-family: var(--text-medium);
  border-bottom: 1px solid var(--light-grey);
  text-transform: uppercase;
  font-size: 1em;
  margin: 0;
`;

const Fields = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
`;

const Field = styled.div`
  width: 100%;
  display: grid;
  flex-flow: row wrap;
  align-items: baseline;
  gap: 5px;

  p {
    border-bottom: 1px solid var(--light-grey);
  }
`;

const Value = styled.p`
  font-size: 1em;
  margin: 0;
`;

const Card = ({ title, data }) => {
  return (
    <Wrapper>
      <Head>
        <h3>{title}</h3>
      </Head>
      <Content>
        {data.map((item, idx) => {
          const { topic, fields } = item;
          return (
            <Container key={idx}>
              <Topic>
                <FocusText color={"pink"}>{topic}</FocusText>
              </Topic>
              <Fields>
                {fields.map((field, idx) => {
                  const { title, value } = field;
                  return (
                    <Field key={idx}>
                      <MiniTopic>{`${title}:`}</MiniTopic>
                      <Value>{value}</Value>
                    </Field>
                  );
                })}
              </Fields>
            </Container>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default Card;
