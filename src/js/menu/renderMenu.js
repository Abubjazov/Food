import { MenuItem } from "./MenuItem"

export const renderMenu = (menu) => {

    const menuItems = menu

    return menuItems.map(item => {
            const mItem = new MenuItem(item)
            return mItem.renderMenu()
        }).join('')
}
