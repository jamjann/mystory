import styled from "styled-components";
import FormattedDate from "../utils/Date";

const Wrapper = styled.div`
  width: 100%;
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

const Subtitle = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 0.5fr auto 0.5fr;
  gap: 1.5em;
  p {
    margin: 0;
  }
`;

const Title = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: auto 4fr auto;
  gap: 1em;
  margin: 1em 0 1.5em;
  text-align: center;
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
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
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
      <Subtitle>
        <Line />
        <span>Hi guys! welcome you to explore</span>
        <Line />
      </Subtitle>

      <Title>
        <LeftBlock>
          <span>"It's all about me and my wonderful life" </span>
        </LeftBlock>
        <Center>
          <h1> Phatthawipha J.</h1>

          <Jobs>
            {jobs.map((job, idx) => {
              return (
                <div key={idx}>
                  <h2>{job}</h2>
                  {idx < jobs.length - 1 && <Dot />}
                </div>
              );
            })}
          </Jobs>
        </Center>
        <RightBlock>
          <h4>latest edition</h4>
          <span>Currently: Enjoying reading a book "Four Thousand Weeks"</span>
        </RightBlock>
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
