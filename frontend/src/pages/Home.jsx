import React, { useEffect } from "react";

const Home = () => {
  const [product, setProduct] = useState(null);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      if (response) {
        setProduct(response.data);
      }
      console.log(product);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return <div>
    
  </div>;
};

export default Home;
