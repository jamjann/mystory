import styled from "styled-components";
import { projectList } from "../../../data";
import Icon from "../../utils/Icon";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 0.8em;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  cursor: pointer;

  &.active,
  &:hover {
    svg {
      fill: var(--main-color);
    }
  }

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.5s;

    fill: transparent;
    stroke: var(--main-color);
    stroke-width: 120px;
    overflow: visible;
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
  return (
    <ItemWrapper onClick={onClick} className={isActive && "active"}>
      <Icon.Star />
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
