import { useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([
      {
        id: 1,
        name: 'Star Wars',
        price: 20,
        quantity: 2
      }
    ])
  
    const getTotal = () => {
      const total = cart.reduce( ( prev, curr ) => prev + (curr.price * curr.quantity), 0 );
  
      return total;
    }
  
    const getInitialItem = ( item ) => ({...item, quantity: 1});
  
    const addToCart = ( item ) => setCart( [ ...cart, getInitialItem( item ) ] );
  
    const cleanCart = () => setCart( cart.filter( movie => movie.quantity !== 0 ) )
  
    const increaseQuantity = ( item ) => setCart( cart.map( movie => {
      if (movie.id === item.id) {
        movie.quantity++
      }
      return movie;
    } ) );
  
    const decreaseQuantity = ( item ) => {
      setCart( cart.map( movie => {
          if (movie.id === item.id) {
            movie.quantity--
          }
  
          return movie;
        } ) 
      )
      cleanCart();
    }
  
    const hasMovie = ( item ) => !!cart.find( movie => movie.id === item.id ) ;
  
    return {
      cart,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      getTotal,
      hasMovie
    }
  }
