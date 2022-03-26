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
        <a href="https://github.com/tecnocrias">
          <img src={githubImg} alt="" />
        </a>
        <a href="https://discord.gg/adxvNfMM88">
          <img src={discordImg} alt="" />
        </a>
        <a href="https://discord.gg/adxvNfMM88">
          <img src={contactImg} alt="" />
        </a>
        
      </div>

    </section>
  );
};
