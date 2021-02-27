import { ChallengesContext } from "../contexts/ChallengesContexts";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinish: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdonw: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

interface CountdownProviderProps {
  children: ReactNode;
}

export function CountdownProvider({ children }: CountdownProviderProps) {
  let countdownTimeOut: NodeJS.Timeout;

  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }
  function resetCountdonw() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setHasFinish(false);
    setTime(25 * 60);
  }

  // toda vez que o estado active mudar ele vai executar a primeira funçao do parametro 1
  // colocando o time como segundo paramentro gerou uma recursividade
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinish(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinish,
        isActive,
        startCountdown,
        resetCountdonw,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
