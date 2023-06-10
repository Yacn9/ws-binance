// Assets
// import { FaAngleLeft } from 'react-icons/fa';

// Types
import { TColumn, TDataItem } from "types";

import styles from "./Table.module.scss";

type Props = {
  data: TDataItem[];
  columns: TColumn[];
};

const MobileDataTable: React.FC<Props> = ({ data, columns }) => {
  return (
    <div className={styles.mobileTable}>
      {data.map((item: TDataItem, index: number) => (
        <div className={styles.mobileSection} key={item.id}>
          <div className={styles.mobileBody}>
            {columns.map((column: TColumn, index: number) => (
              <div key={column.id} className={styles.mobileSec}>
                <span>{column.name}</span>
                <span>{column.render(item, index)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileDataTable;
