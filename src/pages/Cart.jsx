import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export const Cart = () => {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
        setTotalAmount(totalPrice);
    }, [cart]);

    return (
        <div className="cart-container">
            {cart.length > 0 ? (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <CartItem key={item.id} item={item} itemIndex={index} />
                    ))}
                </div>
            ) : (
                <div className="cart-empty">
                    <p>Your Cart is Empty</p>
                    <Link to="/">
                        <button className="shop-now-button">Shop Now</button>
                    </Link>
                </div>
            )}
            <div className="cart-summary">
                <p>Cart Summary</p>
                <p>Total Items: {cart.length}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};
