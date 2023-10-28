import { GridColDef, GridValidRowModel } from "@mui/x-data-grid"

export type MaterialDataGridCol<T extends Partial<GridValidRowModel>> = GridColDef<T> & {
    getActions?: (params: T) => React.ReactNode[]
  }
