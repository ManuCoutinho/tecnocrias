import styles from "./styles.module.scss";
import { Card } from "./Card";


export const Desafios = () => {
  return (
    <div className={styles.container}>
      <h2>Desafios</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Natus numquam commodi omnis deleniti! Reprehenderit fuga quos cupiditate et.</p>
      <div className={styles.cardsContainer}>
       <Card />
      </div>

    </div>
  );
};
