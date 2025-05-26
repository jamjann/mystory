import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  .caption {
    font-size: 0.8em;
    font-family: var(--text-header);
    line-height: 1.5;
    display: inline-block;
    margin-top: 0.5em;
  }
`;

const Photo = styled.div`
  background-size: cover;
  background-position: center;
`;

const Image = ({ className, url, caption }) => {
  return (
    <Wrapper>
      <Photo
        className={className}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></Photo>
      {caption && <span className="caption">{caption}</span>}
    </Wrapper>
  );
};

export default Image;
