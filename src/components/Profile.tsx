import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { useContext } from "react";

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/victor-magaldi.png" alt="" />
      <div>
        <strong>Victor de Souza Magaldi</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
