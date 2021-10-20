export const getMenuItems = async () => {
    return await fetch('http://localhost:3000/menu')
                .then(data => data.json())
}
