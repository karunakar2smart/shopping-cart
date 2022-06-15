import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartSliceActions } from "../../store/Slices/cartSlice";
import { getSingleProduct } from "../../store/Slices/fetchSlice";
import Cart from "../UI/Cart";
import Message from "../UI/Message";

const Product = () => {
 const singleProduct = useSelector((state) => state.fetchSlice);
 const cartSlice = useSelector((state) => state.cartSlice);
 console.log(cartSlice);
 const param = useParams();
 let paramsId = param.productId;
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getSingleProduct({ id: paramsId }));
 }, []);

 if (singleProduct.status === "Pending") {
  return (
   <Container className="text-center" style={{ minHeight: "80vh" }}>
    <h1>Loading Data...!</h1>
   </Container>
  );
 }

 if (singleProduct.status == "Rejected") {
  return (
   <Container className="text-center" style={{ minHeight: "80vh" }}>
    <h1>Api Request has been Rejected</h1>
   </Container>
  );
 }

 const product = singleProduct.data;
 const onAddCartHandler = () => {
  dispatch(cartSliceActions.addToCart(product));
 };
 const { image, title, description, category, price } = singleProduct.data;
 return (
  <Row
   className="d-flex justify-content-center align-items-center m-0"
   style={{ minHeight: "82vh" }}>
   <Cart />
   {singleProduct.status === "Success...!" && (
    <>
     <Col xs={12} md={6} className=" text-center ">
      <img src={image} alt={title} className="w-50 p-2" />
     </Col>
     <Col xs={12} md={6}>
      <h4>Category: {category}</h4>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
      <h6>Ratings: {singleProduct.data.rating.rate}</h6>
      <h6>Count: {singleProduct.data.rating.count}</h6>
      <h3>Price: {price}$</h3>
      <br />

      <Button onClick={onAddCartHandler}>Add To Cart</Button>
     </Col>
    </>
   )}
  </Row>
 );
};

export default Product;
