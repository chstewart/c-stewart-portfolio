"use client";
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { useCallback, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resizeObserverOptions = {};

const maxWidth = 1024;

export default function Resume() {

const [numPages, setNumPages] = useState<number>();
const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-medium tracking-tight">Resume</h1> */}
      <div ref={setContainerRef}>
      <Document file="Chris_Stewart_Resume_2025.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
            ))}
      </Document>
      </div>
    </section>
  );
}
