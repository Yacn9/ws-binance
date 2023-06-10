// Components
import TableBody from "./TableBody";
import MobileDataTable from "./MobileDataTable";
import Skeleton from "react-loading-skeleton";

// Types
import { TColumn } from "types";

import styles from "./Table.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

type Props<T> = {
  columns: TColumn[];
  data: T[];
  loading: boolean;
};

const Table = <T,>({ columns, data, loading }: Props<T>) => {
  return (
    <section className={styles.section}>
      {loading ? (
        <Skeleton
          baseColor="#e2e2e2"
          highlightColor="#d6d6d6"
          style={{ marginTop: "8px", height: "50px" }}
          count={10}
          duration={4}
        />
      ) : (
        <>
          {/* Desktop and tablet  */}
          <div className={styles.md}>
            <table className={styles.table}>
              <TableBody data={data} columns={columns} />
            </table>
          </div>
          {/* Mobile  */}
          <div className={styles.hideMd}>
            <MobileDataTable data={data} columns={columns} />
          </div>

          {/* No Data  */}
          {data.length === 0 && (
            <div className={styles.noData}>
              <span>No Data to Display</span>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Table;
