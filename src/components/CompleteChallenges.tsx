import styles from "../styles/components/CompleteChallenges.module.css";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { useContext } from "react";

export default function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallange}>
      <span>Desafio Completo</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
