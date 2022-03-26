import styles from "./styles.module.scss";
import {Card} from "./Card";


export const Desafios = () => {
  return (
    <div className={styles.container}>
      <h2>Desafios</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Natus numquam commodi omnis deleniti! Reprehenderit fuga quos cupiditate et.</p>
      <div className={styles.cardsContainer}>
        <div className={styles.grid}>
        <Card title="100 dias de código" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></Card>
        <Card title="100 dias de código" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></Card>
        <Card title="100 dias de código" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></Card>
        <Card title="100 dias de código" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."></Card>
        </div>
      </div>

    </div>
  );
};
