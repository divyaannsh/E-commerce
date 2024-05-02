import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartslice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Removed successfully");
    };

    return (
        <div className="flex border-b border-gray-200 py-4 px-6 items-center">
            <div className="w-1/5">
                <img src={item.image} alt={item.title} className="w-full" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
                <div>
                    <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <p className="text-lg text-gray-900">${item.price}</p>
                </div>
                <div className="text-lg cursor-pointer mt-2 text-red-700" onClick={removeFromCart}>
                    <MdDelete className="text-lg" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
