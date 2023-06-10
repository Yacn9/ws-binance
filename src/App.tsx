import React from "react";
import { Table } from "./components";
import { TPayload } from "types";
import styles from "./App.module.scss";

function App() {
  const data = [
    {
      e: "24hrTicker", // Event type
      E: 123456789, // Event Ime
      s: "BTCUSDT",
      p: "0.0015", // Price change
      P: "250.00",
      w: "0.0018", // Weighted average price"c": "0.0025", ***** Last price *****
      Q: "10",
      // Last quanIty
      o: "0.0010", // Open price
      h: "0.0025", // High price
      l: "0.0010", // Low price
      v: "10000",
      // Total traded base asset volume
      q: "18",
      // Total traded quote asset volume
      O: 0,
      // StaIsIcs open Ime
      C: 86400000, // StaIsIcs close Ime
      F: 0,
      // First trade ID
      L: 18150,
      // Last trade Id
      n: 18151,
      // Total number of trades
    },
    {
      e: "24hrTicker", // Event type
      E: 123456789, // Event Ime
      s: "ETHUSDT",
      p: "0.0015", // Price change
      P: "250.00",
      w: "0.0018", // Weighted average price"c": "0.0025", ***** Last price *****
      Q: "10",
      // Last quanIty
      o: "0.0010", // Open price
      h: "0.0025", // High price
      l: "0.0010", // Low price
      v: "10000",
      // Total traded base asset volume
      q: "18",
      // Total traded quote asset volume
      O: 0,
      // StaIsIcs open Ime
      C: 86400000, // StaIsIcs close Ime
      F: 0,
      // First trade ID
      L: 18150,
      // Last trade Id
      n: 18151,
      // Total number of trades
    },
  ];
  const columns = [
    {
      id: 1,
      name: "",
      render: (item: TPayload) => {
        return (
          <p className={styles.cols}>
            <span className={styles.bold}>BTCUSDT</span>
            <span className={styles.perpetual}>Perpetual</span>
          </p>
        );
      },
    },
    {
      id: 2,
      name: "",
      render: (item: TPayload) => {
        return (
          <p className={styles.cols}>
            <span className={styles.bold}>20362.80</span>
            {true ? (
              <span className={styles.increase}>+2.08%</span>
            ) : (
              <span className={styles.decrease}>-2.08%</span>
            )}
          </p>
        );
      },
    },
  ];
  return (
    <div className="App">
      <Table columns={columns} data={data} loading={false} />
    </div>
  );
}

export default App;
