import styled from "styled-components";

const ImageFilter = styled.div`
  position: absolute;
  background-image: url("/images/srcset/paper-680w.webp");
  background-image: image-set(
    url("/images/srcset/paper-680w.webp") 1x,
    url("/images/srcset/paper-960w.webp") 2x,
    url("/images/srcset/paper-1980w.webp") 3x
  );
  background-image: -webkit-image-set(
    url("/images/srcset/paper-680w.webp") 1x,
    url("/images/srcset/paper-960w.webp") 2x,
    url("/images/srcset/paper-1980w.webp") 3x
  );
  background-size: contain;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default ImageFilter;
