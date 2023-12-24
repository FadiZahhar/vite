import { data } from "./data";
import { useState } from "react"
export function UseStateExample() {
    const [people,setPeople] = useState(data);

    // common used method in removing an item from array
    // by filtering the array that don't have this id 
    const removeItem = (id) => {
        console.log("id",id);
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    const clearAllItems = () => {
        setPeople([]);
    };

    return(<div>
        {people.map((person) => {
           const {id, name} = person ;
           console.log(name);
           return(<div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={()=>removeItem(id)}>remove</button>
            </div>)
        })}
        <button type='button' style={{marginTop:'2rem'}}
        className='btn' onClick={clearAllItems}>
            clear items
        </button>
    </div>)
}