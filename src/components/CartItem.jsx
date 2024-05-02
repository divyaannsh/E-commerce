/* eslint-disable react/prop-types */
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartslice";
import toast from "react-hot-toast";


const CartItem = ( {item, itemIndex} ) => {
    const dispatch=useDispatch()
    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.error("removed successfully")

    }
    return (
        <>
            {/* Move the heading inside the loop if you want it for each CartItem */}
            {/* <h1>Cart</h1> */}
            <div>
                <img src={item.image} alt="" />
            </div>
            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <MdDeleteSweep />
                </div>
            </div>
        </>
    );
};

export default CartItem;
