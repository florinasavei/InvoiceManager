import { useEffect, useState } from "react"
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
    calculateRemainingPercentage,
    formatISODate,
    useWindowSize
} from "@invoice-manager/core"
import { ReceivablesGridLegend } from "./ReceivablesGridLegend"

import styles from './style.module.scss'

interface IReceivablesGridProps {
    receivables: IReceivableDTO[] | undefined
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
            flex: 3
        },
        {
            field: 'OpeningValue',
            headerName: "Opening Value",
            sortable: true,
            flex: 3,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) => {
                const value = data.row.OpeningValue;
                const currencyCode = data.row.CurrencyCode;
                return <div title={`${currencyCode} ${value}`} className={styles['ReceivablesGrid__Cell--ellipsis']}>
                    <FormattedCurrency value={value} currencyCode={currencyCode} />
                </div>
            }
        },
        {
            field: 'RemainingBalance',
            headerName: "Remaining Balance",
            sortable: true,
            flex: 3,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) => {
                const value = data.row.RemainingBalance;
                const currencyCode = data.row.CurrencyCode;
                return <div title={`${currencyCode} ${value}`} className={styles['ReceivablesGrid__Cell--ellipsis']}>
                    <FormattedCurrency value={value} currencyCode={currencyCode} />
                </div>
            }
        },
        {
            field: 'ComputedDeptPercentage',
            headerName: "Dept",
            sortable: true,
            flex: 2,
            valueGetter: (params: DataGridRowParams<IReceivableDTO>) =>
                calculateRemainingPercentage(params.row.RemainingBalance, params.row.OpeningValue),
            valueFormatter: (params: DataGridValueFormatterParams<number>) => `${params.value} %`
        },
        {
            field: 'IssueDate',
            headerName: "Issue Date",
            sortable: true,
            flex: 4,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) => {
                const value = formatISODate(data.row.IssueDate.toString());
                return <div title={value} className={styles['ReceivablesGrid__Cell--ellipsis']}>
                    {value}
                </div>
            }
        },
        {
            field: 'DueDate',
            headerName: "Due Date",
            sortable: true,
            flex: 4,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) => {
                const value = formatISODate(data.row.DueDate.toString());
                return <div title={value} className={styles['ReceivablesGrid__Cell--ellipsis']}>
                    {value}
                </div>
            }
        },
        {
            field: 'ClosedDate',
            headerName: "Closed Date",
            sortable: true,
            flex: 4,
            renderCell: (data: DataGridRowParams<IReceivableDTO>) => {
                if (data.row.ClosedDate === null) {
                    return '-';
                }
                const value = formatISODate(data.row.ClosedDate.toString());
                return <div title={value} className={styles['ReceivablesGrid__Cell--ellipsis']}>
                    {value}
                </div>
            }
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
        <div test-dataid="ReceivablesGrid">
            {receivables == undefined || !(receivables.length > 0) ?
                <>No Data</>
                :
                <>
                    <WidthToggler isExpanded={!isSmallView} toggleExpand={(expanded) => { setIsSmallView(!expanded) }} />
                    <MaterialDataGrid
                        columns={columns}
                        rows={receivables}
                        rowIdField='Id'
                        getRowStyle={getRowStyle}
                        columnVisibility={visibleColumns}
                        gridId={`Receivables-${isSmallView ? 'narrow' : 'wide'}`}
                    />
                    <ReceivablesGridLegend />
                </>
            }
        </div>
    )
}
