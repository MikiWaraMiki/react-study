import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { clearInterval } from 'timers';
import { getPrimes } from '../util/math-tool';

const useTimer = (limit: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const timerId = useRef<NodeJS.Timeout>();
  const tick = () => setTimeLeft((t) => t - 1);

  const clearTimer = () => {
    if (timerId.current) clearInterval();
  };

  const reset = useCallback(() => {
    clearTimer();
    timerId.current = setInterval(tick, 1000);
    setTimeLeft(limit);
  }, [limit]);

  useEffect(() => {
    reset();

    return clearTimer;
  }, [reset]);

  return [timeLeft, primes.includes(timeLeft), reset];
};

export default useTimer;
