import { BsSunrise } from "react-icons/bs";
import styles from './style.module.scss'

export const SunRise = () => {
    return (
        <BsSunrise
            size="2rem"
            className={styles.Icon}
            data-testid="SunRiseIcon" />
    )
}
