import styled from "styled-components";
import { projectList } from "../../../data";
import Icon from "../../utils/Icon";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  color: var(--main-color);
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.4s;
  }

  @media screen and (max-width: 900px) {
    svg {
      width: 15px;
      height: 15px;
    }
  }

  @media screen and (max-width: 550px) {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const Item = ({ onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ItemWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isActive ? <Icon.Star /> : <Icon.StarStatus isHovered={isHovered} />}
    </ItemWrapper>
  );
};

const Carousel = ({ onClick, activeItem }) => {
  return (
    <Wrapper>
      {projectList.map((_, idx) => {
        return (
          <Item
            key={idx}
            onClick={() => onClick(idx)}
            isActive={activeItem === idx}
          />
        );
      })}
    </Wrapper>
  );
};

export default Carousel;
