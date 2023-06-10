export type TDataItem = any;

export type TColumn = {
  id: number;
  name: string;
  render: (item: TDataItem, index: number) => React.ReactNode | string | number;
};
