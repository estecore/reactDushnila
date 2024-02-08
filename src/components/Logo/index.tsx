import logo from "../../assets/images/logo.svg";

import styles from "./Logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <a href="https://estecore.ru" target="_blank" rel="noreferrer">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};
