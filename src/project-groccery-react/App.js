//import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import Store_page from './Store_page';
import Bill_page from './Bill_page';
import { useState } from 'react';


function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState('store')
  const [billItems, setBillItems] = useState([])

  const riseItems = (input) => {setBillItems(input)}

  let currentPage
  
  switch (currentPageIndex){
    case 'store':
      currentPage = <Store_page changeCurrentPage = {setCurrentPageIndex} storeRiseItems = {riseItems}/>
      break;
    case 'bill':
      currentPage = <Bill_page items={billItems} changeCurrentPage = {setCurrentPageIndex}/>
  }
    return(
      <div>
        {currentPage}
        
      </div>
    )
  }

export default App;