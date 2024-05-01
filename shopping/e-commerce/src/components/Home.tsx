import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const addToCartHndler=()=>{

  }
  return (
    <div className='home'>
      <section></section>
      <h1>Latest Product
        <Link  to={'/search'} className='findMore'>
          Find More
        </Link>
      </h1>
      <main>
        <ProductCard productId="adsasda" price={1234} name="laptop" stock={123} handler={addToCartHndler} photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg" />
        </main>
    </div>
  )
}

export default Home