import styled from "styled-components";
import Icon from "../../utils/Icon";
import Tag from "./Tag";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  cursor: pointer;
  svg {
    display: flex;
    width: 100%;
    height: auto;
  }

  &:hover {
    .hover {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 1.5em 1.5em 0 0;
`;

const Area = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-flow: row wrap;
  text-align: center;
  position: relative;
`;

const StyledTag = styled(Tag)`
  left: -20px;
  top: 3em;
`;

const Content = styled.div`
  h3 {
    font-family: var(--text-bold);
    font-size: 1.5em;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-size: 0.75em;
    text-transform: uppercase;
    font-family: var(--text-medium);
    letter-spacing: 1px;
  }

  @media screen and (max-width: 480px) {
    p {
      letter-spacing: 0.5px;
    }
  }
`;

const Hover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.5s;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;
  }

  p {
    font-family: var(--text-bold);
    border: 1px solid var(--main-color);
    padding: 1em 2em;

    margin: 0;
    text-transform: uppercase;
    font-size: 0.7em;
    letter-spacing: 1px;
    transition: all 0.5s;

    &:hover {
      color: white;
      background-color: var(--main-color);
    }
  }

  .icon {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgb(247 242 228 / 90%);
    background-image: url("/src/assets/images/paper.png");
    background-size: 500%;
  }
`;

const Book = ({ title, subtitle, tag, link }) => {
  return (
    <Wrapper>
      <Container>
        <StyledTag text={tag} />
        <Area>
          <Content>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </Content>
        </Area>
      </Container>
      <Icon.Book />

      <Hover className="hover">
        <a href={link}>
          <p>open it</p>
        </a>
        <div className="icon">
          <Icon.BookOpen />
        </div>
      </Hover>
    </Wrapper>
  );
};

export default Book;
