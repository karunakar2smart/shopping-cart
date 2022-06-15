import React from "react";
import { Badge, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/Slices/cartSlice";

const Cart = () => {
 const cartSlice = useSelector((state) => state.cartSlice);
 const dispatch = useDispatch();
 const onClickHandler = () => {
  dispatch(cartSliceActions.showCart());
 };
 const onClickCheckoutHandler = () => {
  alert(
   "Checkout of Total Amount" +
    " " +
    cartSlice.quantity * cartSlice.products[0].price +
    "$"
  );
 };
 console.log(cartSlice.products, "product");
 return (
  <Modal show={cartSlice.show}>
   <Modal.Header>
    <Modal.Title>Cart</Modal.Title>
    <Button variant="outline-dark">
     Quantity:
     <Badge bg="info" size="lg">
      {cartSlice.quantity}
     </Badge>
    </Button>
   </Modal.Header>
   <Modal.Body>
    {cartSlice.products &&
     cartSlice.products.map((i) => {
      const { title, price } = i;
      return (
       <>
        <h6>{title}</h6>
        <p>Price: {price}</p>
       </>
      );
     })}
    <h5>
     Total Amount:{" "}
     {cartSlice.products.length > 0 &&
      cartSlice.products[0].price * cartSlice.quantity + "$"}
    </h5>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={onClickHandler}>
     Close
    </Button>
    <Button variant="success" onClick={onClickCheckoutHandler}>
     CheckOut
    </Button>
   </Modal.Footer>
  </Modal>
 );
};

export default Cart;
