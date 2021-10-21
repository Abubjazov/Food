export const getMenuItems = async () => {
    // return await fetch('http://localhost:3000/menu')
    //             .then(data => data.json())

    return await axios.get('http://localhost:3000/menu')
                .then(data => data.data)
}
