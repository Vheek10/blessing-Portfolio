import { useState, useEffect } from "react";

export function useTypingEffect(text: string, speed: number = 150, startDelay: number = 500) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Start delay before typing begins
    timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
          
          if (currentIndex <= text.length) {
            timeout = setTimeout(typeNextChar, speed);
          } else {
            setIsComplete(true);
          }
        }
      };
      
      typeNextChar();
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
