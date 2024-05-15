import React from 'react'
import { restaurant } from '../../config'
import { imageUrl } from '../../config'
const RestCards = ({name,cloudinaryImageId,avgRating,locality,cuisines}) => {
  return (
    <div className='restcards'>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
        <span>{name}</span>
        <span>{avgRating}</span>
        <span> {locality} </span>
        <span>{cuisines.join(" , ")}</span>
    </div>
  )
}

export default RestCards