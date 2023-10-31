
import clsx from 'clsx'
import styles from './style.module.scss'

export const ReceivablesGridLegend = (): React.ReactElement => {

    return (
        <div test-dataid="ReceivablesGridLegend" className={styles.ReceivablesGrid__Legend}>
            <p>Legend:</p>
            <div className={styles.ReceivablesGrid__Legend__Item}>
                <div
                    className={clsx(styles.ReceivablesGrid__Legend__Item__Box, styles["ReceivablesGrid__Legend__Item__Box--cancelled"])}
                >
                </div>
                <div className={styles.ReceivablesGrid__Legend__Label}>
                    Cancelled
                </div>
            </div>
        </div>
    )
}
