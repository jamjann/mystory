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

export { Highlight, SubHighlight, Paragraph, Topic };
