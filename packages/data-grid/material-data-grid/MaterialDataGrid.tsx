import {
  DataGrid, GridColDef, GridRowParams,
} from '@mui/x-data-grid'
import { StyledEngineProvider } from '@mui/material'

import styles from './style.module.scss'
import { DataGridVisibleColumns } from './helpers'


interface IMaterialDataGridProps {
  columns: GridColDef[]
  rows: any[]
  rowIdField: string
  getRowStyle: (row: GridRowParams) => string
  columnVisibility?: DataGridVisibleColumns
  key?: any // key forces re-render
}
const pageSizeOptions = [15, 25, 50, 100];

export const MaterialDataGrid = ({ columns,
  rows,
  rowIdField,
  getRowStyle,
  columnVisibility,
  key = "MaterialDataGrid"
}: IMaterialDataGridProps): React.ReactElement => {

  return (
    <StyledEngineProvider injectFirst>
      <div
        className={styles.DataGridContainer}
      >
        <DataGrid
          key={key}
          columns={columns}
          density='standard'
          rowHeight={44}
          rows={rows}
          getRowId={(row) => row[rowIdField]}
          className={styles.DataGrid}
          disableRowSelectionOnClick
          initialState={{
            pagination: { paginationModel: { pageSize: pageSizeOptions[0] } },
            columns: {
              columnVisibilityModel: columnVisibility,
            },
          }} pageSizeOptions={pageSizeOptions}
          getRowClassName={getRowStyle}

        />
      </div>
    </StyledEngineProvider>
  )
}
