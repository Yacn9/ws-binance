import React, { useEffect, useState } from "react";
import { Table } from "./components";
import { TPayload } from "types";
import { WS } from "constants/config";
import styles from "./App.module.scss";
import { WSService } from "services";

function App() {
  const [payload, setPayload] = useState<TPayload[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const ws = new WSService();

    ws.connect(WS, (payload) => {
      setPayload(payload);
      setLoaded(true);
    });

    return () => {
      ws.close();
    };
  }, []);

  const columns = [
    {
      id: 1,
      name: "",
      render: (item: TPayload) => {
        return (
          <p className={styles.cols}>
            <span className={styles.bold}>{item.s}</span>
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
            <span className={styles.bold}>{item.c}</span>
            {item.P.includes("-") ? (
              <span className={styles.decrease}>{item.P}%</span>
            ) : (
              <span className={styles.increase}>{item.P}%</span>
            )}
          </p>
        );
      },
    },
  ];
  return (
    <div className={styles.app}>
      <div className={styles.section}>
        <Table columns={columns} data={payload} loading={!loaded} />
      </div>
    </div>
  );
}

export default App;
