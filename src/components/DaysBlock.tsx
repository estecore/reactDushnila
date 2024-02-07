import React from "react";

export const DaysBlock: React.FC = () => {
  const [day, setDay] = React.useState(0);
  React.useEffect(() => {
    setDay(Math.round(Math.random() * 10));
  }, []);
  return (
    <div className="days_block">
      <h2>Дней без душноты {day}</h2>
      <button>
        История <span>&#8594;</span>
      </button>
    </div>
  );
};
