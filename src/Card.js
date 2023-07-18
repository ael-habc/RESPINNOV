import * as React from 'react';


import "./Card.css"
import Modals from './Modals';


export default function ProdCard({product}) {
  const {name, price, image} = product
  const prod_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
  const sub_Description = (desc) => {
    if (desc.length > 50) {
      return desc.substring(0, 50) + "..."
    }
    return desc
  }
  return (
    <div className='prod'>
      <img src={require(`${image}`)} alt={name} />
      <h1 className='prod_name'>{name}</h1>
      <p className='prod_description'>{sub_Description(prod_description)}</p>
      <p className='prod_price'>{price}</p>
      <Modals name={name} />
    </div>
  );
}