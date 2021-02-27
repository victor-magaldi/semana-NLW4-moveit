import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { CountdownContext } from "../contexts/CountdownContext";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdonw } = useContext(CountdownContext);

  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdonw();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdonw();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {!activeChallenge ? (
        <div className={styles.challengNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de Level Completando desafios
          </p>
        </div>
      ) : (
        <div className={styles.challengActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccessButton}
              onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
