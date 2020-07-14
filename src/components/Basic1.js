import React,{useState} from 'react'

const Basic1 = (props) => {

    const [productt,setProducts] =useState({name:'',price:''})

    return (
        <div>
            <form>
                <input type="text" value={productt.name}
                onChange ={evt => setProducts({...productt,name:evt.target.value})}/>

                <input type="text" value={productt.price}
                onChange ={evt => setProducts({...productt,price:evt.target.value})}/>
            </form>
            <h1>{productt.name}</h1>
            <h1>{productt.price}</h1>
        </div>
    )
}



export default Basic1
