import React, { useState, useEffect, useRef } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import "./App.css";

let chartConfig = {
  //chart styling
  type: "line",
  series: [
    {
      values: [11, 26, 7, 44, 19],
    },
  ],
};

function App() {
  const [config, setConfig] = useState(chartConfig);

  let chart = useRef(null);

  let randomPlot = [];

  function generateRandomPlot(min, max) {
    for (let i = 0; i < 5; i++) {
      randomPlot.push(getRandomInt(min, max));
    }
  }

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  function updateConfig() {
    generateRandomPlot(0, 100);
    setConfig({
      type: "bar",
      series: [
        {
          values: randomPlot,
        },
      ],
    });
  }

  function reload() {
    chart.current.reload();
  }

  return (
    <div className="App">
      <ZingChart data={config} ref={chart} />
      <div className="controls--container">
        <button id="demo" onClick={() => updateConfig()}>
          update
        </button>
        <button id="reload" onClick={() => reload()}>
          reload
        </button>
      </div>
    </div>
  );
}

export default App;
