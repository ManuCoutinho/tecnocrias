import { AboutItems } from "./AboutItems";
import styles from "./styles.module.scss";
import githubImg from "../../assets/logo_github.svg";
import discordImg from "../../assets/logo_discord.svg";
import contactImg from "../../assets/logo_contact.svg";

export const About = () => {
  return (
    <section className={styles.container}>

      <h2>Sobre</h2>

      <div className={styles.box_item}>
        <AboutItems />
      </div>

      <div className={styles.box_icon}>
        <img src={githubImg} alt="" />
        <img src={discordImg} alt="" />
        <img src={contactImg} alt="" />
      </div>

    </section>
  );
};
