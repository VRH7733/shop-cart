import useFetch from "../../hooks/use-fetch"



export default function CommentsList() {

    const { data, loading, error } = useFetch('https://dummyjson.com/comments')

    if (loading) return <h1>please wait comments loading</h1>
    console.log('comments', data);


    return (
        <div>
            <h1>Comments list page</h1>
            <ul>
                {
                    data?.comments?.length > 0 ?
                        data?.comments.map((commentItem) => {
                            <div>
                                <h2>{commentItem?.body}</h2>
                                <label>{commentItem?.user.fullName}</label>
                            </div>
                        })
                        : null
                }
            </ul>
        </div>
    )
}