import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>Moveit</Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile></Profile>
          <CompleteChallenges></CompleteChallenges>
          <Countdown></Countdown>
        </div>
        <div></div>
      </section>
    </div>
  );
}
