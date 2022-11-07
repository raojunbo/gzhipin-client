import {
    Image
} from 'antd-mobile'

import {
    icon_laoban,
    icon_laoban_selected,
    icon_dashen,
    icon_dashen_selected,
    icon_message,
    icon_message_selected,
    icon_person,
    icon_person_selected
} from './bottom-content'

function CustomTabIcon(props) {
    const { active, imagename } = props
    // icon: require(`./images/头像${i + 1}.png`)

    return (
        <div>
            <Image src={active ? `icon_${imagename}.png` : `icon_${imagename}_selected.png`} width={24} height={24} fit='fill' />
        </div>
    )
}
export default CustomTabIcon