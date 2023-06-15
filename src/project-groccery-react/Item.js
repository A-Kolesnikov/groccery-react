import React from "react"
import Store_page from "./Store_page"
//import { items } from "./backend/classes"

export function ItemStored(props) {
    const item = props.item

    const handleClick = () => {
        props.putIn(item);
    };
    
    return (
        <div className={`row border rounded`} onClick={handleClick}>
            <div className={`col-3`}>
                <img className="rounded pic" src={item.pic} />
            </div>
            <div className={`col-3`}>
                <h1>{item.itemName}</h1>
            </div>
            <div className={`col-3`}>
                <div>
                    Price: {item.price} ₪
                </div>
                <div>
                    Available: {item.inStore} pcs
                </div>
            </div>
        </div>

    )
}

export function ItemBought(props) {
    const item = props.item

    const toClick = () => {
        props.putOut(item);
    };

    return (
        <div className={`row border rounded`} onClick={toClick}>
            <div className={`col-3`}>
                <img className="rounded pic" src={item.pic} />
            </div>
            <div className={`col-3`}>
                <h1>{item.itemName}</h1>
            </div>
            <div className={`col-3`}>
                <div>
                    Price: {item.price} ₪
                </div>
                <div>
                    In cart: {item.inCart} pcs
                </div>
            </div>
        </div>
    )
}