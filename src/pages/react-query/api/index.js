


const productList = [
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
    { id: 4, title: "product4" },
    { id: 5, title: "product5" },

]

export const fetchListOfProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return productList
}

export const addNewProducts = async (productName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newlyCreatedProduct = {
        id: productList.length + 1,
        title: productName
    }

    productList.push(newlyCreatedProduct)

    return newlyCreatedProduct
}