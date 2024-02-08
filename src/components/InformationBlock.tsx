type InformationProps = {
  data: {
    co2: string;
    temp: string;
  };
  uncomfort: boolean;
};
export const InformationBlock: React.FC<InformationProps> = ({
  data,
  uncomfort,
}) => {
  return (
    <div className={`information_block ${uncomfort && "uncomfortable"}`}>
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
