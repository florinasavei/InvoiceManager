import { RxCheck } from "react-icons/rx";
import styles from './style.module.scss'

interface ICheckedProps {
    title?: string
}
export const Checked = ({ title }: ICheckedProps) => {
    return (
        <RxCheck size="2rem"
            className={styles.Icon}
            color="green"
            title={title}
            data-testid="CheckedIcon"
        />
    )
}
