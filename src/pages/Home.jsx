import { useState, useEffect } from 'react';
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (e) {
      console.log("error", e);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid xs:grid-col1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5  ">
        {loading ? <Spinner /> : null}
        {posts.length > 0 ? (
          posts.map((post) => (
            <Product key={post.id} post={post} />
          ))
        ) : (
          <p className="text-red-500">No products available</p>
        )}
      </div>
    </div>
  );
};
