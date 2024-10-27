import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewProducts, fetchListOfProducts } from "./api"
import { useState } from "react"


export default function ReactQueryDemo() {

    const { productTitle, setProductTitle } = useState('')

    const getQueryClient = useQueryClient()

    const { data: productList, isLoading } = useQuery({
        queryKey: ['productList'],
        queryFn: () => fetchListOfProducts()
    })

    const { mutateAsync: handleAddNewProductMutation } = useMutation({
        mutationFn: addNewProducts
        ,
        onSuccess: () => {
            getQueryClient.invalidateQueries(["productList"])
        }
    })

    async function handleAddNewProduct() {
        await handleAddNewProductMutation(productTitle);
        setProductTitle('')
    }

    if (isLoading) return <h1>be calm its loading</h1>

    return <div>
        <h1>React Query Demo</h1>
        <div>
            <input name="name"
                value={productTitle}
                onChange={(event) => setProductTitle(event.target.value)}
                placeholder="enter product title" />
            <button onClick={handleAddNewProduct} disabled={productTitle.trim() === ""} type="button">add new product</button>
        </div>
        <ul>
            {
                productList?.length > 0 ?
                    productList.map(product => <li key={product.id}>{product.title}</li>)
                    : <h1>no product found</h1>
            }
        </ul>
    </div>
}