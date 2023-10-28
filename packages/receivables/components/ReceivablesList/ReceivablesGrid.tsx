import { IReceivableDTO } from "models"
import { MaterialDataGrid, MaterialDataGridCol } from "data-grid"

interface IReceivablesGridProps {
    receivables: IReceivableDTO[] | undefined
}

export const ReceivablesGrid = ({ receivables }: IReceivablesGridProps): React.ReactElement => {
    const columns: Array<MaterialDataGridCol<IReceivableDTO>> = [
        {
            field: 'UniqueReference',
            headerName: "Unique Reference",
            sortable: true,
            flex: 1
        },
        {
            field: 'OpeningValue',
            headerName: "Opening Value",
            sortable: true,
            flex: 1,
        },
        {
            field: 'RemainingBalance',
            headerName: "Remaining Balance",
            sortable: true,
            flex: 1,
        },
        {
            field: 'IssueDate',
            headerName: "Issue Date",
            sortable: true,
            flex: 1
        },
        {
            field: 'DueDate',
            headerName: "Due Date",
            sortable: true,
            flex: 1
        },
        {
            field: 'ClosedDate',
            headerName: "Closed Date",
            sortable: true,
            flex: 1
        },
        {
            field: 'Cancelled',
            headerName: "Cancelled",
            sortable: true,
            flex: 1
        },
    ]

    return (
        <>
           {receivables && <MaterialDataGrid columns={columns} rows={receivables} rowIdField='Id'/>}
        </>
    )
}
