import styles from "./Statistics.module.scss";

type InformationProps = {
  data: {
    co2: string;
    temp: string;
  };
  uncomfort: boolean;
};
export const Statistics: React.FC<InformationProps> = ({ data, uncomfort }) => {
  return (
    <div
      className={`${styles.statistics} ${uncomfort && styles.uncomfortable}`}
    >
      <div>
        <h2>{Math.round(Number(data.temp) * 10) / 10} ℃</h2>
        <h3>Температура</h3>
      </div>
      <div>
        <h2>{Math.round(Number(data.co2))} ppm</h2>
        <h3>CO2</h3>
      </div>
    </div>
  );
};
