"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function PlaywrightResults() { 
    const { theme } = useTheme();
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
                    className={`h-screen ${theme === 'dark' ? 'bg-dark dark' : 'bg-light light'}`}
                    src={iframeUrl}
                    style={{ colorScheme: theme === 'dark' ? 'dark' : 'light' }}
                    title="Playwright Test Results"
                ></iframe>
            )}
        </>
    );
}
