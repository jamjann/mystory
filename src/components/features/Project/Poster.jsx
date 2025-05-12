import styled from "styled-components";
import Icon from "../../utils/Icon";
import TextWithLine from "../../utils/TextWithLine";
import Tag from "./Tag";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTag = styled(Tag)`
  &.tr {
    right: 50px;
    top: -10px;
  }
  &.bl {
    left: 50px;
    bottom: -10px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 2em;
  position: absolute;
  gap: 1em;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 1.5em;

  div {
    width: 100%;
  }

  p {
    width: 100%;
    margin: 5px 0;
    font-size: 0.85em;
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    justify-content: center;
  }
`;

const Topic = styled.h3`
  text-transform: uppercase;
  font-family: var(--text-medium);
  font-size: 0.85em;
  text-align: center;
  margin: 0;
`;

const block = [Icon.Ticket, Icon.Simple, Icon.Stamp];

const Poster = ({ idx, type, topic, data, link }) => {
  const Icon = block[idx % 3];

  return (
    <Wrapper>
      {link && (
        <StyledTag
          link={link}
          className={idx % 2 == 0 ? "bl" : "tr"}
          text="See me!"
        />
      )}
      <Content>
        <Container>
          <TextWithLine type="mini" text={type} />
          <div>
            <Topic>{topic}</Topic>
            {data.map((field, idx) => {
              const { title, value } = field;
              return (
                <p key={idx}>
                  {title} {value}
                </p>
              );
            })}
          </div>
        </Container>
      </Content>
      <Icon />
    </Wrapper>
  );
};

export default Poster;
