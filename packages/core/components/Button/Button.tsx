import { clsx } from 'clsx';
import styles from './style.module.scss'


interface IButtonProps {
    type: "ghost" | "primary" | "secondary";
    onClick?: () => void;
    children: React.ReactNode;
    title?: string;
}

export const Button = ({ type, onClick, children, title }: IButtonProps): React.ReactElement => {

    return (
        <button
            className={clsx(styles.Button ,styles[`Button--${type}`])}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
};

