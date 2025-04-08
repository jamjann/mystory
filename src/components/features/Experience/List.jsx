import styled from "styled-components";
import { experienceList } from "../../../data";

const Wrapper = styled.div`
  border: 1px solid var(--main-color);
  text-transform: uppercase;
  padding: 2em 0;
`;

const Item = styled.div`
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: var(--main-color);
    /* background-color: var(--middle-cream); */
  }
  &.active {
    background-color: var(--main-color);
    color: white;
  }
  * {
    margin: 0;
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
