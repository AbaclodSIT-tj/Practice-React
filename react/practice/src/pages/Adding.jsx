import {useState} from 'react'
import {Things} from '../components/info'
import About from '../pages/about'
const Adding=()=>{
    const [items, setItems]=useState(Things);
    const [name, SetNames]=useState("");
    const [price, SetPrice]=useState("");
    const add=()=>{
        if(name && price) {
            setItems(p=>[
                ...p,{
                    id:Date.now(), name, price: Number(price)
                }
            ]);
            SetNames("");
            SetPrice("");
            alert("Successfully added");
        }
    }

        

    return(
        <>
        <p>name:</p>
        <input type="text" placeholder="Name" value={name} onChange={e=>SetNames(e.target.value)}/><br />
        <p>Price:</p>
        <input type="text" palceholder="Price" value={price} onChange={e=>SetPrice(e.target.value)}/><br />
        <button onClick={add}>ADD</button>
        <About items={items}/>
        </>
    );
}
export default Adding;