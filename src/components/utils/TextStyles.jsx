import styled from "styled-components";

const Highlight = styled.div`
  padding: 1em;
  text-align: center;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);

  & * {
    margin: 0;
    color: white;
    text-transform: uppercase;
    font-family: var(--text-header);
    letter-spacing: 3px;
  }

  @media screen and (max-width: 480px) {
    padding: 0.8em;
    & * {
      letter-spacing: 1.5px;
    }
  }
`;

const SubHighlight = styled.div`
  border: 1px solid var(--main-color);

  & * {
    margin: 0;
    padding: 10px;
    color: var(--main-color);
    font-family: var(--text-header);
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    & * {
      padding: 0.8em;
    }
  }
`;

const Paragraph = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-flow: column wrap;
  gap: 1.5em;
  * {
    margin: 0;
  }
`;

const Topic = styled.div`
  font-family: var(--text-header);
  .bold {
    font-family: var(--text-header-bold);
  }
  * {
    margin: 0;
  }
`;

const MiniTopic = styled.p`
  font-family: var(--text-bold);
  text-transform: uppercase;
  margin: 0;
  font-size: 0.85em;
`;

const Head = styled.div`
  padding: 4px 0;
  text-align: center;
  border-top: 3px solid var(--main-color);
  border-bottom: 3px solid var(--main-color);

  > * {
    margin: 0;
    text-transform: uppercase;
    font-family: var(--text-header);
    letter-spacing: 3px;
    border-top: 1px solid var(--main-color);
    border-bottom: 1px solid var(--main-color);
    padding: 0.5em;
  }

  @media screen and (max-width: 480px) {
    padding: 2px 0;
    border-width: 2px;
    > * {
      letter-spacing: 1.5px;
      padding: 0.4em;
    }
  }
`;

export { Highlight, SubHighlight, Paragraph, Topic, MiniTopic, Head };
