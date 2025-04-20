"use client";
import React, { useEffect, useState } from 'react';

export default function PlaywrightResults() { 
    const [iframeUrl, setIframeUrl] = useState('');

    useEffect(() => {
        const timestamp = new Date().getTime();
        const newIframeUrl = `https://chstewart.github.io/c-stewart-portfolio/?t=${timestamp}`;
    
        setIframeUrl(newIframeUrl);
      }, []);

    return (
        <>
            {iframeUrl && (
                <iframe
                    id="playwrightResults"
                    className="h-screen"
                    src={iframeUrl}
                    title="Playwright Test Results"
                ></iframe>
            )}
        </>
    );
}
