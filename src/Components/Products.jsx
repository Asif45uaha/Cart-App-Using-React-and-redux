import axios from "axios";
import { useEffect, useState } from "react";
import { add } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchProducts();
    // dispatch(fetchProduct())
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(URL);
      //   //   //console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="error" />
          <h4>{product.title}</h4>
          <h5>Rs: {product.price} ₹/-</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
