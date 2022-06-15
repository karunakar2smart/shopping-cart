import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/Slices/cartSlice";
const Navigation = () => {
 const cartSlice = useSelector((state) => state.cartSlice);
 const dispatch = useDispatch();
 const onClickHandler = () => {
  dispatch(cartSliceActions.showCart());
  console.log(cartSlice, "CartSlice");
 };

 return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Container>
    <Navbar.Brand>
     <Nav.Link href="/" className="text-white">
      Shopping Cart For SquareShift
     </Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto"></Nav>
     <Nav className="mt-3 mt-md-0">
      <Button variant="outline-light" onClick={onClickHandler}>
       Cart
       <Badge bg="success" className="ms-2">
        {cartSlice.quantity}
       </Badge>
      </Button>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Navigation;
