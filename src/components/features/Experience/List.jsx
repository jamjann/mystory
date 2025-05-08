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
`;

const Item = styled.div`
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
    &:hover {
      border-top-color: transparent;
      border-bottom-color: transparent;

      border-left-color: var(--main-color);
      border-right-color: var(--main-color);
    }
  }
`;

const List = ({ onClick, activeItem }) => {
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

export default List;
