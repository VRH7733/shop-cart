import { useParams } from "react-router-dom"



export default function ReceipeDetailsPage() {

    const params = useParams();

    console.log(params);
    const { id } = params

    return <div>
        <h1>recipe details of item {id}</h1>
    </div>
}