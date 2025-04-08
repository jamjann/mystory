import styled from "styled-components";

const color = {
  orange: "rgb(229 152 106 / 80%)",
  pink: "rgb(219 112 147 / 80%)",
  blue: "rgb(117 148 182 / 70%)",
  green: "rgb(189 183 107 / 80%)",
};

const Wrapper = styled.div`
  border: 1px solid var(--main-color);
  display: grid;
  align-items: center;
  text-align: justify;
  grid-template-columns: 0.5fr 2fr;
`;

const Title = styled.div`
  padding: 1em;
  text-transform: uppercase;
  font-family: var(--text-bold);
  border-right: 1px solid var(--main-color);
`;

const Value = styled.div`
  padding: 1em;
  text-align: center;
  font-family: var(--text-medium);

  p {
    margin: 0;
  }
`;

const Link = styled.div`
  position: relative;

  &::after {
    content: "";
    background-color: ${(props) =>
      props.color ? color[props.color] : color.pink};
    transform: skewX(345deg);
    transition: width 0.5s;
    width: 0%;
    height: 100%;
    position: absolute;
    left: -3%;
    top: 0;
    z-index: -1;
  }

  &:hover::after {
    width: 106%;
  }

  a {
    transition: all 1s;
    &:hover {
      color: var(--main-color);
    }
  }
`;

const Field = ({ title, children, color }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>
        {color ? <Link color={color}>{children}</Link> : <div>{children}</div>}
      </Value>
    </Wrapper>
  );
};

export default Field;
