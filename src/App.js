import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 return (
  <BrowserRouter>
   <Router />
  </BrowserRouter>
 );
}

export default App;
