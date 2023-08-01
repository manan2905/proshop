import React, { useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import Axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
  const  [products, setProducts] = React.useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const dataObj = await Axios.get("/api/products");
      setProducts(dataObj.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
          {products.map((product)=>{
              return ( 
              // responsive column - small, medium, large, xl
              <Col sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
              </Col> );
          })}
      </Row>
    </>
  )
}

export default HomeScreen