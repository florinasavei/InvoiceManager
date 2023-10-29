import { ThemeOptions } from "@invoice-manager/models"
import { Moon, SunRise } from "../../icons"
import { Button } from "../Button"

interface IThemeSwitcherProps {
    theme: ThemeOptions,
    setTheme: (theme: ThemeOptions) => void
}

export const ThemeSwitcher = ({ theme, setTheme }: IThemeSwitcherProps): React.ReactElement => {
    return (
        <div>
            {theme === "dark" &&
                <Button
                    type="ghost"
                    onClick={() => { setTheme('light') }}
                >
                    <SunRise />
                </Button>
            }
            {theme === "light" &&
                <Button
                    type="ghost" onClick={() => { setTheme('dark') }}>
                    <Moon />
                </Button>
            }
        </div>
    )
}
