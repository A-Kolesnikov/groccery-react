import React from 'react';
import { useState } from 'react';
import Items_in_store from './Items_in_store';
import Items_in_cart from './Items_in_cart';
import Item from "./backend/classes"

function Store_page(props) {
    let goods = [];

    goods.push(new Item("img/milk.jpg", "Milk", 5, 50, 0))
        goods.push(new Item("../img/coffee.jpg", "Coffee", 16, 10, 0))
        goods.push(new Item("../img/cheese.jpg", "Cheese", 15, 10, 0))
        goods.push(new Item("../img/bread.jpg", "Bread", 4.9, 100, 0))
        goods.push(new Item("../img/tomato.jpg", "Tomato", 3.9, 100, 0))
        goods.push(new Item("../img/butter.jpg", "Butter", 12, 10, 0))
        goods.push(new Item("../img/meat.jpg", "Meat", 25, 5, 0))

    const [items, setItems] = useState(goods)

    const resetGoods = () => {
        goods = [];
        goods.push(new Item("../img/milk.jpg", "Milk", 5, 50, 0))
        goods.push(new Item("../img/coffee.jpg", "Coffee", 16, 10, 0))
        goods.push(new Item("../img/cheese.jpg", "Cheese", 15, 10, 0))
        goods.push(new Item("../img/bread.jpg", "Bread", 4.9, 100, 0))
        goods.push(new Item("../img/tomato.jpg", "Tomato", 3.9, 100, 0))
        goods.push(new Item("../img/butter.jpg", "Butter", 12, 10, 0))
        goods.push(new Item("../img/meat.jpg", "Meat", 25, 5, 0))
        setItems(goods)
    }

    let total = 0;
    for (let element of items) {
        total += element.inCart * element.price
    }

    const handleChangePage = () => {
        props.storeRiseItems(items)
        props.changeCurrentPage('bill')
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Grocceries</h1>
            <div className='row justify-content-center'>
                <Items_in_store items={items} putIn={setItems} />
                <div className='col-1'></div>
                <Items_in_cart items={items} putOut={setItems} />
            </div>
            <div className='row justify-content-center bigUnit'>
                Total: {total.toFixed(2)}₪
                <div className='row justify-content-center'>
                    <button className='col-2' onClick={handleChangePage}>Buy</button>
                    <div className='col-2'></div>
                    <button className='col-2'onClick={resetGoods}>Reset</button>
                </div >
            </div>
        </div>
    )
}

export default Store_page;