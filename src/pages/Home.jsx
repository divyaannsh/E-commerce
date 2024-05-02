import { useState, useEffect } from 'react';
import { Spinner } from '../components/Spinner';
import { Product } from '../components/Product';

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && <Spinner />}
        {!loading && posts.length === 0 && (
          <p className="text-red-500">No products available</p>
        )}
        {posts.map((post) => (
          <Product key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
