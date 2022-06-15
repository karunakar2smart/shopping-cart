import React, { useEffect } from "react";
import {
 Badge,
 Button,
 Card,
 CardGroup,
 Col,
 Container,
 ListGroup,
 ListGroupItem,
 Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTotalProducts } from "../../store/Slices/fetchSlice";
import Cart from "../UI/Cart";

const LandingPage = () => {
 const fetchProducts = useSelector((state) => state.fetchSlice);

 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getTotalProducts());
 }, [dispatch]);

 if (fetchProducts.status === "Pending...!") {
  return (
   <Container className="text-center" style={{ minHeight: "80vh" }}>
    <h1>Loading Data...!</h1>
   </Container>
  );
 }

 if (fetchProducts.status == "Rejected...!") {
  return (
   <Container className="text-center" style={{ minHeight: "80vh" }}>
    <h1>Api Request has been Rejected</h1>
   </Container>
  );
 }

 return (
  <Container>
   <h1>Here are the List of Products</h1>
   <Cart />
   {fetchProducts.status === "Success...!" && (
    <div className="d-inline-flex flex-wrap  m-auto justify-content-evenly ">
     {fetchProducts.data.map((i) => {
      return (
       <Card
        key={i.id}
        className="m-1 mb-5 shadow-lg"
        style={{ maxWidth: "22rem", width: "100%" }}>
        <Card.Header>{i.title}</Card.Header>
        <Card.Img
         variant="top"
         src={i.image}
         className="w-50 img-thumbnail m-auto text-center p-2 border-0"
        />
        <Card.Body>
         <Card.Text className="text-truncate">
          Description: {i.description}
         </Card.Text>
        </Card.Body>
        <Card.Footer className="p-0">
         <ListGroup>
          <ListGroupItem>Category: {i.category} </ListGroupItem>
          <ListGroupItem>Rate: {i.rating.rate} </ListGroupItem>
          <ListGroupItem>Count: {i.rating.count} </ListGroupItem>
          <ListGroupItem>Price : {i.price}$ </ListGroupItem>
          <ListGroupItem className="text-center p-3 m-1">
           <a
            href={`/product/${i.id}`}
            className="p-3 bg-primary text-white text-decoration-none">
            View Product
           </a>
          </ListGroupItem>
         </ListGroup>
        </Card.Footer>
       </Card>
      );
     })}
    </div>
   )}
  </Container>
 );
};

export default LandingPage;
