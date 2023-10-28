import { ThemeOptions } from "@invoice-manager/models"
import { Moon, SunRise } from "../../icons"

interface IThemeSwitcherProps {
    theme: ThemeOptions,
    setTheme: (theme: ThemeOptions) => void
}

export const ThemeSwitcher = ({ theme, setTheme }: IThemeSwitcherProps): React.ReactElement => {
    return (
        <div>
            {theme === "dark" &&
                <button onClick={() => { setTheme('light') }}>
                    <SunRise />
                </button>
            }
            {theme === "light" &&

                <button onClick={() => { setTheme('dark') }}>
                    <Moon />
                </button>
            }
        </div>
    )
}
