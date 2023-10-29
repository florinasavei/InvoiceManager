import { useEffect, useLayoutEffect, useState } from "react"
import { IReceivableDTO } from "@invoice-manager/models"
import {
    DataGridRowParams,
    DataGridValueFormatterParams,
    DataGridVisibleColumns,
    MaterialDataGrid,
    MaterialDataGridCol
} from "@invoice-manager/data-grid"
import {
    BooleanIndicator,
    FormattedCurrency,
    WidthToggler,
    calculateRemainingPercentage
} from "@invoice-manager/core"

import styles from './style.module.scss'


interface IReceivablesGridProps {
    receivables: IReceivableDTO[] | undefined
}

// TODO: move to core
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => {
            window.removeEventListener('resize', updateSize)
        };
    }, []);
    return size;
}

export const ReceivablesGrid = ({ receivables }: IReceivablesGridProps): React.ReactElement => {

    const [width] = useWindowSize();

    const [isSmallView, setIsSmallView] = useState<boolean>(width < 1200);


    useEffect(() => {
        setIsSmallView(width < 1200)
    }, [width])

    const getRowStyle = (params: DataGridRowParams<IReceivableDTO>) => {
        if (params.row.Cancelled === true) {
            return styles["ReceivablesGrid__Row--canceled"];
        }
        return "";
    };

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
            renderCell: (data: DataGridRowParams<IReceivableDTO>) =>
                <FormattedCurrency value={data.row.OpeningValue} currencyCode={data.row.CurrencyCode} />
        },
        {
            field: 'RemainingBalance',
            headerName: "Remaining Balance",
            sortable: true,
            flex: 1,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) =>
                <FormattedCurrency value={data.row.RemainingBalance} currencyCode={data.row.CurrencyCode} />
        },
        {
            field: 'ComputedDeptPercentage',
            headerName: "Dept",
            sortable: true,
            flex: 1,
            valueGetter: (params: DataGridRowParams<IReceivableDTO>) =>
                calculateRemainingPercentage(params.row.RemainingBalance, params.row.OpeningValue),
            valueFormatter: (params: DataGridValueFormatterParams<number>) => `${params.value} %`
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
            flex: 1,
        },
        {
            field: 'Cancelled',
            headerName: "Active",
            sortable: true,
            flex: 1,
            valueGetter: (params: DataGridRowParams<IReceivableDTO>) => !params.row.Cancelled,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) =>
                <BooleanIndicator value={!data.row.Cancelled} />
        },
    ]

    let visibleColumns: DataGridVisibleColumns = {
        ComputedDeptPercentage: !isSmallView,
        ClosedDate: !isSmallView,
        IssueDate: !isSmallView,
        Cancelled: !isSmallView,
    }

    return (
        <div>
            <WidthToggler isExpanded={!isSmallView} toggleExpand={(expanded) => { setIsSmallView(!expanded) }} />
            {receivables &&
                <MaterialDataGrid
                    columns={columns}
                    rows={receivables}
                    rowIdField='Id'
                    getRowStyle={getRowStyle}
                    columnVisibility={visibleColumns}
                    gridId={`Receivables-${isSmallView ? 'narrow' : 'wide'}`}
                />}
        </div>
    )
}
