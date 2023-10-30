import { RxCross2 } from "react-icons/rx";
import styles from './style.module.scss'

interface ICrossProps {
    title?: string
}
export const Cross = ({ title }: ICrossProps) => {
    return (
        <RxCross2
            size="2rem"
            className={styles.Icon}
            color="red"
            title={title}
            data-testid="CrossIcon"
        />
    )
}
