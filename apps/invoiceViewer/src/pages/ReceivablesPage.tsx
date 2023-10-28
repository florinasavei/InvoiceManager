import { IReceivableDTO } from "@invoice-manager/models";
import { useState, useEffect } from "react";
import ReceivableService from '../services/receivables'
import { ReceivablesGrid } from "@invoice-manager/receivables";


export const ReceivablesPage = () => {

    const [receivables, setReceivables] = useState<IReceivableDTO[] | undefined>(undefined)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await ReceivableService.getAll();
                setReceivables(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <h2>Receivables</h2>
            <ReceivablesGrid receivables={receivables} />
        </div>
    )
}
