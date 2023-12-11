import {
  GridColDef,
  GridRowParams,
  GridValidRowModel,
  GridValueFormatterParams,
} from "@mui/x-data-grid";

export type MaterialDataGridCol<T extends Partial<GridValidRowModel>> =
  GridColDef<T> ;

export interface DataGridRowParams<R> extends Partial<GridRowParams> {
  row: R;
}

export type DataGridVisibleColumns = Record<GridColDef['field'], boolean>

export type DataGridValueFormatterParams<T> =
GridValueFormatterParams<T> & {
    valueFormatter?: (params: GridValueFormatterParams<T>) => any
  };
