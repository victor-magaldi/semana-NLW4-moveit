import { useState, useEffect, useContext } from "react";
import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../contexts/CountdownContext";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinish,
    isActive,
    startCountdown,
    resetCountdonw,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinish ? (
        <button disabled className={styles.countdownButton}>
          Ciclo Encerrado
        </button>
      ) : !isActive ? (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar Ciclo
        </button>
      ) : (
        <button
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonPause}`}
          onClick={resetCountdonw}
        >
          Terminar Ciclo
        </button>
      )}
    </div>
  );
}
