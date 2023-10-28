import { ThemeOptions } from "models"
import { Moon, SunRise } from "../../icons"

interface IThemeSwitcherProps {
    theme: ThemeOptions,
    setTheme: (theme: ThemeOptions) => void
}

export const ThemeSwitcher = ({ theme, setTheme }: IThemeSwitcherProps): React.ReactElement => {
    return (
        <div>
            <button onClick={() => { setTheme('light') }}>
                <SunRise />
            </button>
            <button onClick={() => { setTheme('dark') }}>
                <Moon />
            </button>
        </div>
    )
}
