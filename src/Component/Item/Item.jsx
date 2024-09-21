import React from 'react'
import './Item.css'
import { useContext } from 'react'
import {ShopContext} from '../../Context/ShopContext'
import {useParams } from "react-router-dom"
import ItemDisplay from '../ItemDisplay/ItemDisplay'



function Item () {
    const {detail} = useContext(ShopContext);
    const {itemId} = useParams();
    const event = detail.find((e) => e.event_id===itemId);
    console.log(event);
  return (
    <div className='item'>
       <ItemDisplay event={event}/>
   </div>

  )
}

export default Item;