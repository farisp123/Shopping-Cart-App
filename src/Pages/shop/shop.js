import React from 'react'
import {PRODUCTS} from '../../products'
import { Product } from './product'
import "./shop.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export const Shop = () => {
  return (
    <div className="shop">
    <div className='text-center'>
    <h1 className='font-weight-bold'>Trendstube Shop</h1>
  </div>
    <div className='products'>
    {PRODUCTS.map((product) => (
        <Product data={product}/>
    ))}
    </div>
    </div>
  )
}
