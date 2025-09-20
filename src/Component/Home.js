import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Action from './Redux/Action.js'
import '../Style/Home.css'

const Home = ({ handleCart }) => {
  const products = useSelector(state => state.items.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Action())
  }, [dispatch])

  return (
    <div className="products-container">
      {products?.map((item, index) => (
        <div className='productCart' key={index}>
          <img src={item.img} alt={item.name}/>
          <p className="name">{item.name}</p>
          <p className="category">{item.category}</p>
          <p className="price">Rs.{item.price}</p>
          <p className="rating">⭐ {item.rating}</p>
          <p className="review">{item.review} Reviews</p>
          <p className="desc">{item.desc}</p>
          <button onClick={() => handleCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Home
