import { MdWidthNormal } from "react-icons/md";
import styles from './style.module.scss'

export const Collapse = () => {
    return (
        <MdWidthNormal
            size="2rem"
            className={styles.Icon}
            data-testid="CollapseIcon"
        />
    )
}
