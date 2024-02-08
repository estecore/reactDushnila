export const DushnilaBlock: React.FC<{ uncomfort: boolean }> = ({
  uncomfort,
}) => {
  return (
    <div className={`dushnila_block ${uncomfort && "uncomfortable"}`}>
      <h2>
        Душнила <span className="hide">НЕ</span> <br />
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
