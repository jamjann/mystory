import styled from "styled-components";
import FormattedDate from "../utils/Date";
import TextWithLine from "../utils/TextWithLine";
import { MiniTopic } from "../utils/TextStyles";

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTextWithLine = styled(TextWithLine)`
  span {
    height: 3px;
  }

  @media screen and (max-width: 480px) {
    span {
      height: 2px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--main-color);
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: var(--main-color);
  margin: 0 3px;
`;

const Title = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  margin: 0.5em 0 1.5em;
  text-align: center;
  gap: 1em;

  grid-template-areas: "quote name activity";
  grid-template-rows: auto;
  grid-template-columns: auto 4fr auto;

  @media screen and (max-width: 900px) {
    grid-template-areas:
      "name name"
      "quote quote"
      "activity activity";

    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto auto;
  }
  @media screen and (max-width: 480px) {
    margin: 1em 0;
  }
`;

const QuoteCol = styled.div`
  grid-area: quote;
`;
const NameCol = styled.div`
  grid-area: name;
`;
const ActivityCol = styled.div`
  grid-area: activity;
`;

const LeftBlock = styled.div`
  padding: 1em;
  border: 1px solid var(--main-color);
  text-align: center;
  max-width: 16ch;

  span {
    font-size: 0.8em;
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    padding: 0.5em;
    max-width: 100%;
  }
`;

const Center = styled.div`
  h1 {
    font-family: var(--text-header);
    margin: 0;
  }
  h2 {
    font-size: 0.9em;
    margin: 0;
  }
`;

const RightBlock = styled.div`
  max-width: 14ch;
  text-align: justify;
  h4 {
    font-family: var(--text-bold);
    text-transform: uppercase;
    margin: 0;
  }
  span {
    font-size: 0.8em;
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    max-width: 100%;
    display: grid;
    align-items: baseline;
    grid-template-columns: auto 1fr auto;
    gap: 5px;

    span.dotted {
      border-bottom: 2px dotted var(--middle-grey);
    }
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    grid-template-columns: auto;
    grid-template-rows: auto auto;

    span.dotted {
      border-bottom-width: 1px;
    }
  }
`;

const Description = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: auto 4fr auto;
  gap: 1em;
  font-family: var(--text-header);
  text-transform: uppercase;
  letter-spacing: 1px;
  p,
  a {
    font-size: 0.65em;
  }
`;

const Jobs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 0.5em;

  h2 {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }

  @media screen and (max-width: 480px) {
    margin-top: 5px;
    h2 {
      letter-spacing: 0;
    }
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const PageHeader = () => {
  const date = new Date();
  const jobs = ["software engineer", "full-stack developer"];

  return (
    <Wrapper>
      <StyledTextWithLine type="small" text="Hi guys! welcome you to explore" />

      <Title>
        <QuoteCol>
          <LeftBlock>
            <span>
              <b>"It's all about me and my wonderful life"</b>
            </span>
          </LeftBlock>
        </QuoteCol>

        <NameCol>
          <Center>
            <h1> Phatthawipha J.</h1>

            <Jobs>
              {jobs.map((job, idx) => {
                return (
                  <div key={idx}>
                    <h2>
                      <b>{job}</b>
                    </h2>
                    {idx < jobs.length - 1 && <Dot />}
                  </div>
                );
              })}
            </Jobs>
          </Center>
        </NameCol>

        <ActivityCol>
          <RightBlock>
            <MiniTopic>latest edition</MiniTopic>
            <span className="dotted" />
            <span>
              <b>Currently: Enjoying reading a book "Four Thousand Weeks"</b>
            </span>
          </RightBlock>
        </ActivityCol>
      </Title>

      <Line />
      <Description>
        <a href="/">Resume</a>

        <Location>
          <p>Vancouver,</p>
          <FormattedDate date={date} />
        </Location>

        <a href="/">Contact</a>
      </Description>
      <Line />
    </Wrapper>
  );
};

export default PageHeader;
