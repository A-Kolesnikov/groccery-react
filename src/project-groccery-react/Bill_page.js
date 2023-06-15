import React from 'react';
import { useState } from 'react';
import Items_in_store from './Items_in_store';
import Items_in_cart from './Items_in_cart';
import Item from "./backend/classes"

function Bill_page(props) {

    const handleChangePage = () => {
        props.changeCurrentPage('store')
    }
    let total = 0;
    let boughtItems = []
    for (const element of props.items) {
        if (element.inCart > 0) {
            total += element.inCart * element.price
            boughtItems.push(<div key={'b' + element.id} className='text-center'>{element.itemName} - {element.inCart}pcs.....{(element.inCart * element.price).toFixed(2)}$</div>)
        }
    }
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-8">
                    <h2 className='text-center'>Your order</h2>
                    <div className='row justify-content-center'>
                        <div className='col-1'>Total: {total.toFixed(2)}₪</div>
                        {boughtItems}
                        <div className='row justify-content-center'>
                            <button className='col-2' >Pay</button>
                            <div className='col-2'></div>
                            <button className='col-2' onClick={handleChangePage}>Contiue shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill_page;