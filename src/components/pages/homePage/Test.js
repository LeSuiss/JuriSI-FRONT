import React,{useEffect} from 'react'
 const Test = (props) => {

    useEffect(() => {
        props={...props}
    }, [])
     console.log(props.Reference)
    return (
        <div>
            <button onClick={()=>console.log(props.Reference)}>button</button>
        </div>
    )
}
export default Test