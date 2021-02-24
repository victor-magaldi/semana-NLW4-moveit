import CompleteChallenges from "../components/CompleteChallenges";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile></Profile>
          <CompleteChallenges></CompleteChallenges>
        </div>
        <div></div>
      </section>
    </div>
  );
}
