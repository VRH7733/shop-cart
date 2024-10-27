import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";



export default function ReceipeList() {
    const location = useLocation();
    const { data, loading, error } = useFetch('https://dummyjson.com/recipes')
    const windowSize = useWindowResize()
    if (loading) return <h1>please waur fwrcgunbs</h1>
    console.log(data)

    return (
        <div>
            <h1 style={{ display: windowSize.width < 768 ? 'none' : 'block' }}>Receipes list page</h1>
            <h3>current windowSize is  {windowSize.width} and {windowSize.height}</h3>

            <ul>
                {
                    data?.recipes?.length > 0 ?
                        data?.recipes.map((recipeItem) => {
                            <div>
                                <img src={recipeItem?.image} alt="" />
                                <label>{recipeItem?.name}</label>
                            </div>
                        })
                        : null
                }
            </ul>
            <h3>awervwe</h3>
        </div>
    )
}