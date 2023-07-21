import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        copyright {new Date().getFullYear()} by Epic Voyage Inc.
      </p>
    </footer>
  );
};

export default Footer;
