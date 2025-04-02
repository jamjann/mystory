import styled from "styled-components";

const color = {
  orange: "rgb(229 152 106 / 80%)",
  pink: "rgb(219 112 147 / 80%)",
  blue: "rgb(117 148 182 / 70%)",
  green: "rgb(189 183 107 / 80%)",
};

const Wrapper = styled.span`
  position: relative;
  /* display: inline-block; */
  /* color: white; */

  &::after {
    content: "";
    background-color: ${(props) =>
      props.color ? color[props.color] : color.blue};
    transform: skewX(350deg);

    width: 106%;
    height: 100%;
    position: absolute;
    left: -3%;
    top: 0;
    z-index: -1;
  }
`;

const FocusText = ({ color, children }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default FocusText;
