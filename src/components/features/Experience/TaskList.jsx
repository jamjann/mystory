import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-flow: row wrap;
  text-align: justify;
  gap: 10px;

  @media screen and (max-width: 480px) {
    gap: 5px;
  }
`;

const Point = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  p {
    margin: 0;
  }

  &:before {
    font-size: 0.75em;
    content: "★";
  }

  .content {
    margin-top: 10px;
    p {
      &:before {
        content: "•";
        margin-right: 5px;
      }
    }
  }
`;

const TaskList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((point, idx) => {
        return (
          <Point key={idx}>
            <div>
              <p>{point.text}</p>
              {point.content && (
                <div className="content">
                  {point.content.map((c, idx) => {
                    return <p key={idx}>{c}</p>;
                  })}
                </div>
              )}
            </div>
          </Point>
        );
      })}
    </Wrapper>
  );
};

export default TaskList;
