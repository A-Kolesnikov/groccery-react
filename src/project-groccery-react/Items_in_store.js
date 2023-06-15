import React from "react";
import { ItemStored } from "./Item";
//import { items } from "./backend/classes"

function Items_in_store(props) {
    const putIn = props.putIn
    const handleToCart = (item) => {
        item.toCart();
        putIn([...props.items]) //trigger state update
    }
    const storedItems = []
    
    for (let element of props.items) {
        storedItems.push(<ItemStored key={'s' + element.id} item={element} items={props.items} putIn={putIn} />)
    }
    return (
        <div className="col-5 border rounded">
            <h2>Grocceries</h2>
            {storedItems}
        </div>
    )
}

export default Items_in_store