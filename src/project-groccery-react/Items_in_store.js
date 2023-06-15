import React from "react";
import { ItemStored } from "./Item";
//import { items } from "./backend/classes"

function Items_in_store(props) {
    const putIn = props.putIn
    const handleToCart = (item) => {
        item.toCart();
        putIn([...props.items]) //trigger state update
    }
    const storedItems = props.items.map((element) => (
        <ItemStored
            key={'s' + element.id}
            item={element} putIn={handleToCart} // Pass the method as a prop
        />));

    return (
        <div className="col-5 border rounded">
            <h2>Store</h2>
            {storedItems}
        </div>
    )
}

export default Items_in_store