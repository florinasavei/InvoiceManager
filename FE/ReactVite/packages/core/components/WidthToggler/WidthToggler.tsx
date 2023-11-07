import { Collapse, Expand } from '../../icons'
import { Button } from '../Button'

interface IWidthTogglerProps {
    isExpanded: boolean
    toggleExpand: (isExpanded: boolean) => void
}

export const WidthToggler = ({ isExpanded, toggleExpand }: IWidthTogglerProps): React.ReactElement => {
    return (
        <div test-dataid="WidthToggler">
            {isExpanded ?
                <Button
                    type="ghost"
                    onClick={() => { toggleExpand(false) }}
                    title="Collapse"
                >
                    <Collapse />
                </Button>
                :
                <Button
                    type="ghost"
                    onClick={() => { toggleExpand(true) }}
                    title="Expand"
                >
                    <Expand />
                </Button>
            }
        </ div>
    )
}
