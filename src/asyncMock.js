const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: '25',
        description: 'Descripción de Iphone 12',
    },
    {
        id: '2',
        name: 'Samsung Galaxy A33',
        price: 900,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2022/05/41DkWYstB6L._SL500_.jpg',
        stock: '40',
        description: 'Descripción de A33',
    },
    {
        id: '3',
        name: 'Impresora Térmica Ocom',
        price: 1200,
        category: 'impresora',
        img: 'https://cbafederal.net/wp-content/uploads/2023/07/impresora-termica-ocom-80mm-usbrs232lanwifi-0.jpg',
        stock: '5',
        description: 'Descripción de Impresora térmica Ocom',
    },
]
export const getProducts = ()  => {
    return new Promise((resolve) =>{
        setTimeout (() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}