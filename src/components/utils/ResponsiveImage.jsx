import styled, { keyframes } from "styled-components";

const blurAnimation = keyframes`
 0% { backdrop-filter: blur(5px);opacity:0.6;}
50% { backdrop-filter: blur(4px);}
90% { backdrop-filter: blur(0px);opacity:1;}

`;

const Wrapper = styled.img`
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

const ResponsiveImage = ({ src, alt, size }) => {
  const small = `${src}-320w.webp`;
  const medium = `${src}-680w.webp`;
  const large = `${src}-960w.webp`;
  const xLarge = `${src}-1980w.webp`;

  return (
    <picture>
      {/* <source media="(max-width:360px)" srcSet={small} /> */}
      <source media="(max-width:900px)" srcSet={medium} />
      <source media="(max-width:1500px)" srcSet={large} />
      <source media="(max-width:1980px)" srcSet={xLarge} />
      <Wrapper
        // srcSet={`${small} 320w, ${medium} 680w, ${large} 960w, ${xLarge} 1980w`}
        src={large}
        alt={alt}
        loading="lazy"
        // fetchPriority="high"
        style={{
          objectFit: size,
        }}
      />
    </picture>
  );
};

export default ResponsiveImage;
