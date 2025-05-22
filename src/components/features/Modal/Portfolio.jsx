import FlipBook from "../../utils/Flipbook";
import file from "../../../assets/portfolio.pdf";
import styled from "styled-components";
import { useScreenSize } from "../../../utils";

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: ${(props) => `${props.size}px`};
`;

const Portfolio = () => {
  const { width, height } = useScreenSize();

  //   set the width according to width of screen size
  const setAreaWidth = (screenSize) => {
    if (screenSize > 2000) return 1800;
    if (screenSize > 1400) return screenSize - 200;
    if (screenSize < 500) return screenSize - 50;

    return screenSize - 100;
  };

  //   set the size by checking whether defined width larger than height of screen size
  const setContainerSize = (width, height) => {
    const areaWidth = setAreaWidth(width);
    const size = areaWidth > 1100 ? areaWidth / 2 : areaWidth;

    return size > height ? height - 150 : areaWidth;
  };

  const setFlipBookSize = (containerSize) => {
    return containerSize > 1100 ? containerSize / 2 : containerSize;
  };

  const containerSize = setContainerSize(width, height);
  const flipBookSize = setFlipBookSize(containerSize);

  return (
    <Wrapper>
      <Container size={containerSize}>
        <FlipBook pdfFile={file} size={flipBookSize} />
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
