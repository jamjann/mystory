import styled from "styled-components";
import { experienceList } from "../../../data";

const Wrapper = styled.div`
  border: 1px solid var(--main-color);
  text-transform: uppercase;
  padding: 2em 0;

  @media screen and (max-width: 1800px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, auto);
    text-align: center;
    padding: 0;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    padding: 0;
  }
`;

const Item = styled.div`
  font-size: 0.85em;
  cursor: pointer;
  font-family: var(--text-medium);
  padding: 10px;
  transition: all 0.5s;
  border: 1px solid transparent;

  &:hover {
    border-top-color: var(--main-color);
    border-bottom-color: var(--main-color);
  }
  &.active {
    background-color: var(--main-color);
    color: white;
  }
  * {
    margin: 0;
  }

  @media screen and (max-width: 1800px) {
    &:nth-child(1) {
      &:hover {
        border-left-color: transparent;
      }
    }
    &:nth-last-child(1) {
      &:hover {
        border-right-color: transparent;
      }
    }
    &:hover {
      border-top-color: transparent;
      border-bottom-color: transparent;

      border-left-color: var(--main-color);
      border-right-color: var(--main-color);
    }
  }

  @media screen and (max-width: 900px) {
    width: 50%;
    border: none;
    border-bottom: 1px solid var(--main-color);

    &:nth-child(1) {
      width: 100%;
    }
    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
    &:nth-child(even) {
      border-right: 1px solid var(--main-color);
    }

    &:hover {
      background-color: var(--main-color);
      border-color: var(--main-color);
      color: white;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 8px;
  }
`;

const PositionList = ({ onClick, activeItem }) => {
  return (
    <Wrapper>
      {experienceList.map((item, idx) => {
        return (
          <Item
            key={idx}
            onClick={() => onClick(idx)}
            className={activeItem === idx && "active"}
          >
            {item.company}
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default PositionList;
