import React, { useState, useEffect } from 'react';

export default function Typer ({content="", speed=1000}) {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent((displayedContent) => displayedContent + content[index])
  }, [index]);

  return <pre className="typer">{displayedContent}</pre>
}