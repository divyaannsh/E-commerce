// import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from your routing library
import CartItem from '../components/CartItem';
export const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount,setTotalAmount]=useState(0)
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))

    },[cart])

    return (
        <>
            {cart.length > 0 ? (
                // Render content when cart has items
                // <div>Cart not empty</div>
                <>
                <div>{cart.map((item,index)=>{
                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                })}</div>
                <div>
                    <p>Your Cart</p>
                    <p>Summary</p>
                    <p>Total item: {cart.length}</p>
                </div>
                <div>
                    <p>Total amount:{totalAmount}</p>
                </div>

                </>
            ) : (
                // Render content when cart is empty
                <>  
            
                    <div>Cart empty</div>
                    <Link to="/">
                        <button>Shop Now</button>
                    </Link>
                </>
            )}
        </>
    );
};
