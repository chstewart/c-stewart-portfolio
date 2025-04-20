import { Metadata } from "next";
import PlaywrightResults from 'app/components/playwright-results';

export const metadata: Metadata = {
    title: "Test Results",
    description: "Playwright Test Results",
};

export default function TestResults() { 
    return (
        <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Test Results</h1>
        <div className="flex flex-col space-y-4">
        <PlaywrightResults />
        </div>
        </section>
    );
}
