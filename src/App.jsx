import Header from "./Components/Header.jsx";
import Meals from "./Components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext";
import { ProegressProvider } from "./store/ProgressCart.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CheckOut from "./components/Checkout/CheckOut.jsx";
function App() {
  return (
    <ProegressProvider>
    <CartContextProvider>
 <Header/>
 <Meals/>
 <Cart/>
<CheckOut/>
    </CartContextProvider>
    </ProegressProvider>
  );
}

export default App;
