import React from "react";
import {ItemBought} from "./Item";
//import { items } from "./backend/classes"

function Items_in_cart(props){
    const boughtItems = []
    for (let element of props.items){
        if(element.inCart > 0){
        boughtItems.push(<ItemBought key = {"b" + element.id} item={element} />)
        }
    }
    return(
        <div className="col-5 border rounded">
            <h2>Your Cart</h2>
            {boughtItems}
        </div>
    )
}

export default Items_in_cart