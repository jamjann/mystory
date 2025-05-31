import styled, { keyframes } from "styled-components";

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

// const Photo = styled.div`
//   background-size: cover;
//   background-position: center;
// `;

const blurAnimation = keyframes`
 0% { backdrop-filter: blur(5px);opacity:0.6;}
50% { backdrop-filter: blur(4px);}
90% { backdrop-filter: blur(0px);opacity:1;}

`;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;
const Photo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: bottom;

  animation-name: ${blurAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`;

const OptimizedImage = ({ className, src, alt, size, priority = false }) => {
  return (
    <Photo
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      fetchPriority="high"
      style={{
        objectFit: size,
      }}
      // {...(priority ? { fetchpriority: "high" } : {})}
    />
  );
};

const Image = ({ className, id, url, alt, size = "cover", caption }) => {
  return (
    <Wrapper>
      {/* <Photo
        className={className}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></Photo> */}
      <Container className={className}>
        <OptimizedImage key={id} src={url} alt={alt} size={size} />
      </Container>
      {caption && <span className="caption">{caption}</span>}
    </Wrapper>
  );
};

export default Image;
