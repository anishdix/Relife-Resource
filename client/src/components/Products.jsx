import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let url = "https://relife-resource.onrender.com/";
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(cat ? `${url}api/products?category=${cat}` : `${url}api/products`);
        // console.log("API Response:", res.data);
        setProducts(res.data.data);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
   

    if (cat && filters) {
      const filtered = products.filter(item => 
        Object.entries(filters).every(([key, value]) => 
          item[key]?.includes(value)  
        )
      );
      console.log("Filtered Products:", filtered);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {isLoading ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "auto" }}
          py={10}
        >
          <CircularProgress size={30} />
          <h4> Loading Products... </h4>
        </Box>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <Product item={item} key={item._id} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </Container>
  );
};

  


export default Products;