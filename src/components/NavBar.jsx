import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const {cart} = useSelector((state) => state);
    return (
        <nav className="flex justify-between items-center h-20 max-w-6xl bg-gray-800 text-white p-4">
            <NavLink to='/' className="flex items-center">
                <img src="https://logowik.com/content/uploads/images/circle-logo-mark6315.jpg" className="h-14" alt="" />
            </NavLink>
            <div className="flex items-center space-x-4">
                <NavLink to='/' className="font-medium text-slate hover:text-gray-300">
                    <p>Home</p>
                </NavLink>
                <NavLink to='/cart' className="relative text-2xl">
                    <FaCartShopping />
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-green-400 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                    )}
                </NavLink>
            </div>
        </nav>
    );
};
