import styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {!hasActiveChallenge ? (
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
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>Novo Desafio</strong>
            <p>levante e faça uma caminhada rápida</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSuccessButton}>
              Completei
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
