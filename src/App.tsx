import React from "react";

import { DaysBlock } from "./components/DaysBlock";
import { DushnilaBlock } from "./components/DushnilaBlock";
import { InformationBlock } from "./components/InformationBlock";
import { LogoBlock } from "./components/LogoBlock";
import "./scss/app.scss";

export const App: React.FC = () => {
  const [data, setData] = React.useState<{
    co2: string;
    temp: string;
  }>({ co2: "844", temp: "23" });
  const [uncomfort, setUncomfort] = React.useState<boolean>(Boolean);

  const getInformation = React.useCallback(async () => {
    try {
      await fetch("http://dushnila.gooddelo.com/data")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setUncomfort(Number(data.co2) > 800 || Number(data.temp) > 27);
        });
    } catch (error) {
      alert("error");
    }
  }, []);

  React.useEffect(() => {
    getInformation();
    setInterval(() => getInformation(), 10000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="main_title">Душнила</h1>
        <div className="content">
          <div className="half1">
            <DushnilaBlock uncomfort={uncomfort} />
            <div className="half">
              <DaysBlock />
              <LogoBlock />
            </div>
          </div>
          <InformationBlock data={data} uncomfort={uncomfort} />
        </div>
      </div>
    </div>
  );
};
