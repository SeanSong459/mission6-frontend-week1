import React from "react";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/api/products")
  //       .then((res) => {
  //         // console.log(res.data);
  //         setProducts(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   });
  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");

      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //   let productList = products.map((product, key) => {
  //     return product.name;
  //   });

  //   console.log(productList);
  return (
    <div className="homeContainer">
      <button onClick={getProducts}>Get Products</button>
      {products.map((product) => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
