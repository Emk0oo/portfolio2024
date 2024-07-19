import { useEffect, useState } from 'react';

const useWordFlick = (words: string[], speed: number, skipDelay: number) => {
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    const len = words.length;
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prev) => {
            if (prev === skipDelay) {
              setForwards(false);
              return 0;
            }
            return prev + 1;
          });
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prev) => (prev + 1) % len);
        } else {
          setOffset((prev) => prev - 1);
        }
      }

      setPart(words[i].substr(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, i, words, speed, skipDelay]);

  return part;
};

export default useWordFlick;
