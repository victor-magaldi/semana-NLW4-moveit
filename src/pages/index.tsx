import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { GetServerSideProps } from "next";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

import { ChallengeProviders } from "../contexts/ChallengesContexts";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);

  return (
    <ChallengeProviders
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>Moveit</Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />

              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProviders>
  );
}

// função que roda no server do Next.js
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;
  const user = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  };
  return {
    props: user,
  };
};
