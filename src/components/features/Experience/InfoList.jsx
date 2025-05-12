import styled from "styled-components";
import { SmallBox } from "../../utils/Box";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 1em;
`;

const Info = styled.div`
  div {
    display: flex;
    gap: 5px;
  }
  p {
    font-size: 0.8em;
    color: var(--dark-beige);
    margin: 0;
    text-align: left;
  }
  .text {
    display: block;
    margin-top: 10px;
    text-align: justify;
  }

  @media screen and (max-width: 900px) {
    .text {
      margin-top: 0px;
    }
  }
`;

const StyledSmallBox = styled(SmallBox)`
  width: 100%;
`;

const InfoList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((i, idx) => {
        return (
          <StyledSmallBox key={idx}>
            <Info>
              <div>
                <span className="star">* </span>
                <p className="bold">{i.title}</p>
              </div>
              <p className="text">{i.detail}</p>
            </Info>
          </StyledSmallBox>
        );
      })}
    </Wrapper>
  );
};

export default InfoList;
