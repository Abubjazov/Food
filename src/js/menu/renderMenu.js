import { getMenuItems } from "./getMenuItems"
import { MenuItem } from "./MenuItem"

export const renderMenu = async () => {

    const menuItems = await getMenuItems()
    
    return menuItems.map(item => new MenuItem(item).renderMenu()).join('')
}
