import React from "react"
import Store_page from "./Store_page"
//import { items } from "./backend/classes"

export function ItemStored(props) {
    const item = props.item
    function upd(){
        props.items[props.item.id-1].toCart()
    }
    return (
        <div className={`row border rounded`} onClick={()=>props.putIn(upd)}>
            <div className={`col-3`}>
                <img className="rounded pic" src={item.pic} />
            </div>
            <div className={`col-3`}>
                <h1>{item.itemName}</h1>
            </div>
            <div className={`col-3`}>
                <div>
                    Price: {item.price} $
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
    return (
        <div className={`row border rounded`}>
            <div className={`col-3`}>
                <img className="rounded pic" src={item.pic} />
            </div>
            <div className={`col-3`}>
                <h1>{item.itemName}</h1>
            </div>
            <div className={`col-3`}>
                <div>
                    Price: {item.price} $
                </div>
                <div>
                    In cart: {item.inCart} pcs
                </div>
            </div>
        </div>

    )
}