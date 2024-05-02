import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const { cart } = useSelector((state) => state);

    return (
        <nav className="flex justify-between items-center h-20 max-w-6xl text-white p-4 relative">
            <NavLink to='/' className="flex items-center">
                <img src="https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg" className="h-14" alt="Logo" />
            </NavLink>
            <div className="flex items-center space-x-4 absolute top-0 right-0 mr-4 mt-4"> 
                <NavLink to='/' className="font-medium text-slate hover:text-gray-300">
                    Home
                </NavLink>
                <NavLink to='/cart' className="relative text-2xl font-medium text-slate hover:text-gray-300 flex items-center">
                    <FaShoppingCart />
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-yellow-400 text-xs w-5 h-5 flex justify-center items-center rounded-full text-black">{cart.length}</span>
                    )}
                </NavLink>
            </div>
        </nav>
    );
};
