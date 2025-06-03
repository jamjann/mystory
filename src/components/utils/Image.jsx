import styled from "styled-components";
import ResponsiveImage from "./ResponsiveImage";

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  .caption {
    font-size: 0.8em;
    font-family: var(--text-header);
    line-height: 1.5;
    display: inline-block;
    margin-top: 0.5em;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const Image = ({ className, id, src, alt, size = "cover", caption }) => {
  return (
    <Wrapper>
      <Container className={className}>
        <ResponsiveImage key={id} src={src} alt={alt} size={size} />
      </Container>
      {caption && <span className="caption">{caption}</span>}
    </Wrapper>
  );
};

export default Image;
