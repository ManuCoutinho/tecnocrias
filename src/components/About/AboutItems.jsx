import styles from "./styles.module.scss";

export const AboutItems = () => {
  const items = [
    { title: "Comunidade", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
    { title: "Servidor", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
    { title: "Grupo de Estudos", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
  ];

  return (
    <div className={styles.box_item}>
      {items.map((item) => {
        return (
          <div className={styles.box_text}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
