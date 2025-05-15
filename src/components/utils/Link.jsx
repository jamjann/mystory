import styled from "styled-components";

const color = {
  orange: "rgb(229 152 106 / 80%)",
  pink: "rgb(219 112 147 / 80%)",
  blue: "rgb(117 148 182 / 70%)",
  green: "rgb(189 183 107 / 80%)",
  purple: "rgb(167 128 204 / 70%)",
};

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 1s;
  a {
    &:hover {
      color: var(--main-color);
    }
  }

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
`;

const Link = ({ className, color, to, text }) => {
  return (
    <Wrapper className={className} color={color}>
      <a href={to} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Wrapper>
  );
};

export default Link;
