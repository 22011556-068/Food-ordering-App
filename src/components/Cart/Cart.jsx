import CartContext from "../../store/CartContext.jsx"
import { useContext } from "react"
import Modal from "../../UI/Modal.jsx"
import currencyFormat from "../../utils/formatting.js";
import Button from "../../UI/Button.jsx";
import ProgressCart from "../../store/ProgressCart.jsx";
import CheckItems from "./CheckItems.jsx";

export default function Cart(){
    const progressCtx = useContext(ProgressCart);
    const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice,item) => totalPrice + item.quantity * item.price
  ,0);
  function handleCloseCart(){
    progressCtx.hideCart();
  }
  function handleCheckOut(){
    progressCtx.showCheckout();
  }

    return <Modal className="cart" open={progressCtx.progress=== 'cart'} close={progressCtx.progress === ''} >
  <h2>Your Cart</h2>
  <ul>
    {
        cartCtx.items.map((item)=>(
            <CheckItems
             key={item.id}
             name={item.name}
              quantity={item.quantity}
               price={item.price}
               onIncrease={()=> cartCtx.addItems(item)}
               onDecrease={()=>{cartCtx.removeItems(item.id)}}
               />
        ))
    }
  </ul>
  <p className="cart-total">{currencyFormat.format(cartTotal)}</p>
  <p className="modal-actions">
    <Button textOnly={true} onClick={handleCloseCart} >close</Button>
   {cartCtx.items.length > 0 &&  <Button onClick={handleCheckOut} >Go to checkout</Button> }
  </p>
    </Modal>
}