import styles from "./Button.module.css";

export const Button = ({ children, onclick, type }) => {
  return (
    <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};
