import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--palette-red-2);
  font-family: var(--text-medium);
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  color: white;
  font-size: 0.6em;
  letter-spacing: 1px;
  margin: 0;
  padding: 1em 2em;
  transition: all 0.7s;

  &:hover {
    color: white;
    background-color: var(--main-color);
  }
`;

const Text = styled.p`
  color: white;
  font-size: 0.6em;
  letter-spacing: 1px;
  margin: 0;
  padding: 1em 2em;
`;

const Tag = ({ className, link, text }) => {
  return (
    <Wrapper className={className}>
      {link ? (
        <Link href={link} target="_blank">
          {text}
        </Link>
      ) : (
        <Text>{text}</Text>
      )}
    </Wrapper>
  );
};

export default Tag;
