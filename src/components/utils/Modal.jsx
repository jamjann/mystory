import styled from "styled-components";
import Icon from "./Icon";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(17 17 17 / 80%);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 1em;
  position: relative;

  opacity: 0;
  filter: blur(10px);
  transition: all 0.5s;

  &.active {
    opacity: 1;
    filter: blur(0);
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: -3em;

  svg {
    width: 30px;
    @media screen and (max-width: 900px) {
      width: 20px;
    }
  }
`;
const CloseBtn = styled.a`
  cursor: pointer;

  svg path {
    transition: all 0.5s;
  }
  &:hover {
    svg path {
      fill: var(--palette-red-2);
    }
  }
`;

const Modal = ({ onClose, isLoading, children }) => {
  return (
    <Wrapper>
      <Container className={!isLoading && "active"}>
        <Actions>
          <CloseBtn onClick={onClose}>
            <Icon.Close />
          </CloseBtn>
        </Actions>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Modal;
