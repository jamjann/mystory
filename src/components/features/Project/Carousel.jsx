import styled from "styled-components";
import { projectList } from "../../../data";
import Icon from "../../utils/Icon";

const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  color: var(--main-color);

  &.active {
    color: var(--palette-red);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.5s;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const Carousel = ({ onClick, activeItem }) => {
  return (
    <Wrapper>
      {projectList.map((_, idx) => {
        return (
          <Item
            key={idx}
            onClick={() => onClick(idx)}
            className={activeItem === idx && "active"}
          >
            {activeItem === idx ? <Icon.Star /> : <Icon.StarOutline />}
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default Carousel;
