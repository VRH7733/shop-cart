import { useEffect, useRef } from "react"



export default function Hooks() {

    const countValue = useRef(0)
    const divElementRef = useRef()
    const inputRefElement = useRef()

    function handleClick() {
        countValue.current++
        console.log(countValue.current);
    }

    useEffect(() => {
        const getDiveReference = divElementRef.current
        getDiveReference.style.color = 'red'
        inputRefElement.current.focus()
        setTimeout(() => {
            getDiveReference.style.color = 'blue'
        }, 2000)
        console.log(getDiveReference);

    }, [])

    return (
        <div>
            <h1>use ref, use callback and use memo hook</h1>
            <button onClick={handleClick}>click me</button>
            <div ref={divElementRef}>Some random text
                <input name="name" placeholder="enter your name" ref={inputRefElement} />
            </div>
        </div>
    )
}