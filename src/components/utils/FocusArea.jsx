import styled from "styled-components";

const Wrapper = styled.div`
  width: max-content;
  cursor: pointer;
  position: relative;
  z-index: 2;

  .text {
    display: flex;
    position: relative;
    z-index: 1;
    transition: all 1s;
  }

  .focus {
    width: 0;
    height: 100%;
    background-color: var(--main-color);
    position: absolute;
    left: -5%;
    bottom: 0;
    transition: all 0.7s;
  }

  &:hover {
    .text,
    a {
      transition: all 1s;
      color: white;
    }
    .focus {
      width: 110%;
    }
  }
`;

const FocusArea = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      <div className="text">{children}</div>
      <span className="focus"></span>
    </Wrapper>
  );
};

export default FocusArea;
