import React from 'react'
import {ShopCard} from '../components'

const ItemGrid = () => {
  return (
    <div className='grid place-items-center grid-cols-4 gap-10 grid-rows-2'>
        <ShopCard />
    </div>
  )
}

export default ItemGrid