import { useEffect, useState } from "react";
import { Quote, Twitter } from "@icon-park/react";
import Link from "next/link";

const getRandomPastelColor = (): string => {
  // Generate pastel by mixing with white
  const mix = (value: number): number => {
    return Math.floor((value + 255) / 2);
  };

  const r = mix(Math.floor(Math.random() * 256));
  const g = mix(Math.floor(Math.random() * 256));
  const b = mix(Math.floor(Math.random() * 256));

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

interface QuoteData {
  data: {
    quote: string;
    author: string;
  }
}

const QuoteBox = () => {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [color, setColor] = useState<string>("black");

  useEffect(() => {
    getQuoteData()
      .then(response => response.json())
      .then(data => setQuoteData(data))
      .then(() => setColor(getRandomPastelColor()));
  }, []);

  const handleClick = async () => {
    getQuoteData()
      .then(response => response.json())
      .then(data => setQuoteData(data))
      .then(() => setColor(getRandomPastelColor()));
  };

  return (
    <div
      style={{ backgroundColor: color, transition: 'background-color 0.3s ease' }}
      className={"flex flex-col items-center justify-center h-screen"}
    >
      <div
        style={{ color: color, transition: 'color 0.3s ease' }}
        className={`flex flex-col gap-4 items-center w-2/5 bg-white rounded p-12 mb-4`}
      >
        <div id="text" className="flex gap-2 text-2xl">
          <Quote/>
          {quoteData?.data?.quote}
        </div>
        <div id="author" className="flex justify-end w-full">- {quoteData?.data?.author}</div>
        <div className="flex justify-between w-full">
          <Link id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"
                style={{ backgroundColor: color, transition: 'background-color 0.3s ease' }}
                className="p-3 text-white rounded">
            <Twitter theme="filled"/>
          </Link>
          <button id="new-quote" onClick={handleClick}
                  style={{ backgroundColor: color, transition: 'background-color 0.3s ease' }}
                  className="p-2 text-white rounded"
          >
            New quote
          </button>
        </div>
      </div>
      <p>by duongvi</p>
    </div>
  );
};

async function getQuoteData() {
  return fetch("/api/stoic-quote");
}

export default QuoteBox;