import styled from "styled-components";
import Poster from "./Poster";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1.5em;

  @media screen and (max-width: 1550px) {
    gap: 2em;
    grid-template-columns: 0.5fr 0.5fr;
  }
  @media screen and (max-width: 1000px) {
    gap: 2em;
    grid-template-columns: 1fr;
    width: 80%;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const CertificationList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, idx) => {
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
    </Wrapper>
  );
};

export default CertificationList;
