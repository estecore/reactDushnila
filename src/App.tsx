import React from "react";

import { DushnilaSatisfied, Days, Logo, Statistics } from "./components";

import "./scss/app.scss";

export const App: React.FC = () => {
  const [data, setData] = React.useState<{
    co2: string;
    temp: string;
  }>({ co2: "844", temp: "23" });

  const [uncomfort, setUncomfort] = React.useState<boolean>(Boolean);

  // function get co2 and temp from api and setUncomfort
  const getInformation = React.useCallback(async () => {
    try {
      await fetch("http://dushnila.gooddelo.com/data/", { mode: "cors" })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setUncomfort(Number(data.co2) > 800 || Number(data.temp) > 27);
        });
    } catch (error) {
      alert("Здесь настолько Душно, что данные не загрузились..");
      console.log(error);
    }
  }, []);

  // sets the initial value when the page is rendered and starts the value update interval
  React.useEffect(() => {
    getInformation();
    const getInterval = setInterval(getInformation, 10000);
    return () => {
      clearInterval(getInterval);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="main_title">Душнила</h1>
        <div className="content">
          <div>
            <DushnilaSatisfied uncomfort={uncomfort} />
            <div className="half">
              <Days />
              <Logo />
            </div>
          </div>
          <Statistics data={data} uncomfort={uncomfort} />
        </div>
      </div>
    </div>
  );
};
