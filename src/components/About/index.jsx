import { AboutItems } from "./AboutItems";
import styles from "./styles.module.scss";
import { FaGithub, FaDiscord } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const About = () => {
  return (
    <section className={styles.container}>

      <h2>Sobre</h2>

      <AboutItems />

      <div className={styles.box_icon} aria-label="Box de contatos">
        <a href="https://github.com/tecnocrias" role="Acesso ao Github do Tecnocrias" target="_blank" rel="nofollow noreferrer">
          <FaGithub/>
        </a>
        <a href="https://discord.gg/adxvNfMM88" role="Acesso ao Discord do Tecnocrias" target="_blank" rel="nofollow noreferrer">
          <FaDiscord/>
        </a>
        <a href="mailto:tecnolets@gmail.com" role="Acesso ao email do Tecnocrias" target="_blank" rel="nofollow noreferrer">
          <MdEmail/>
        </a>
        
      </div>

    </section>
  );
};
