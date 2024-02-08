import React from "react";

import styles from "./Days.module.scss";

export const Days: React.FC = () => {
  const [day, setDay] = React.useState(0);

  React.useEffect(() => {
    setDay(Math.round(Math.random() * 10));
  }, []);

  return (
    <div className={styles.days}>
      <h2>Дней без душноты {day}</h2>
      <button>
        История <span>&#8594;</span>
      </button>
    </div>
  );
};
