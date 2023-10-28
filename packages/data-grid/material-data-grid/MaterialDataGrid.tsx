import {
  DataGrid, GridColDef,
} from '@mui/x-data-grid'

import styles from './style.module.scss'
import { StyledEngineProvider } from '@mui/material'


interface IMaterialDataGridProps {
  columns: GridColDef[]
  rows: any[]
  rowIdField: string
}
const pageSizeOptions = [15, 25, 50, 100];


export const MaterialDataGrid = ({ columns, rows, rowIdField }: IMaterialDataGridProps): React.ReactElement => {
  return (
    <StyledEngineProvider injectFirst>
      <div
        className={styles.DataGridContainer}
      >
        <DataGrid
          columns={columns}
          density='standard'
          rowHeight={44}
          rows={rows}
          getRowId={(row) => row[rowIdField]}
          className={styles.DataGrid}
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: pageSizeOptions[0] } },

          }} pageSizeOptions={pageSizeOptions} // Specify the available page size options
        />
      </div>
    </StyledEngineProvider>
  )
}
