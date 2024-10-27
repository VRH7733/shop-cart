import { Link } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <div>
            <h3>this page doesn't exist</h3>
            <Link to={"/recipe-list"}>go to recipe list</Link>
        </div>
    )
}