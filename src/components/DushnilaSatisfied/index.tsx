import styles from "./Dushnila.module.scss";

export const DushnilaSatisfied: React.FC<{ uncomfort: boolean }> = ({
  uncomfort,
}) => {
  return (
    <div className={`${styles.dushnila} ${uncomfort && styles.uncomfortable}`}>
      <h2>
        Душнила <span className={styles.hide}>НЕ</span> <br />
        доволен вами
      </h2>
      {!uncomfort ? (
        <p>Все показатели в норме</p>
      ) : (
        <p>CO2 или Температура превышает норму!</p>
      )}
    </div>
  );
};
