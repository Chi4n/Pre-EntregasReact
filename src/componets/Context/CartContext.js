import { createContext} from "react";
import { useState } from "react";
import React from "react";





const CartContext = createContext();
export default CartContext;






export function CartProvider ({ children }){
    

    const [cart, setCart] = useState([])

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart (item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])

        } else {
            console.error('agregado')
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value ={{ cart, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )


}


    