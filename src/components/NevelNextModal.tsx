import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/LeveUpModal.module.css";

export function LeveUpModal() {
  const { level, closeModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.containerModal}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>
        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div>
  );
}
