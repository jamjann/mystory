import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page as ReactPdfPage, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import HTMLFlipBook from "react-pageflip";

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const PageWrapper = styled.div``;

const Page = React.forwardRef(({ pageNumber, size }, ref) => {
  return (
    <PageWrapper ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={size} />
    </PageWrapper>
  );
});

const FlipBook = ({ pdfFile, size }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Wrapper>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <HTMLFlipBook
          width={size}
          height={size}
          size="fixed"
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          // showCover={true}
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              size={size}
            />
          ))}
        </HTMLFlipBook>
      </Document>
    </Wrapper>
  );
};

export default FlipBook;
