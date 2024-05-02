import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/cartslice';
import { toast } from 'react-hot-toast';

export const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  const isItemInCart = cart.some((p) => p.id === post.id);

  return (
    <div className='flex flex-col items-center justify-between hover:shadow-md gap-3 p-4 mt-10 ml'>
      <div>
        <p className='text-gray-700 font-semibold truncate w-40'>{post.title}</p>
      </div>
      <div>
        <p>{post.description.split(' ').splice(0, 10).join(' ')}...</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt="Product" className='h-full w-full object-cover' />
      </div>
      <div className='flex justify-between items-center w-full'>
        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>
        <button
          className={`text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:text-black ${isItemInCart ? 'bg-gray-200' : ''}`}
          onClick={isItemInCart ? removeFromCart : addToCart}
        >
          {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
