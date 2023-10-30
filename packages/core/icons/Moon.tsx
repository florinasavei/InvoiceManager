import { RxMoon } from "react-icons/rx";
import styles from './style.module.scss'

export const Moon = () => {
    return (
        <RxMoon
            size="2rem"
            className={styles.Icon}
            data-testid="MoonIcon"
        />
    )
}
