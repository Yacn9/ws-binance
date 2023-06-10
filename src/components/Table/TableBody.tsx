// Components
import { TColumn, TDataItem } from "types";

// Assets
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import styles from "./Table.module.scss";
import React from "react";

type Props = {
  data: TDataItem[];
  columns: TColumn[];
};

const TableBody: React.FC<Props> = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item: TDataItem, index: number) => (
        <React.Fragment key={index}>
          <tr className={styles.tableTr}>
            {columns.map((column, index) => (
              <td key={column.id} className={styles.tableTd}>
                {column.render(item, index)}
              </td>
            ))}
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
