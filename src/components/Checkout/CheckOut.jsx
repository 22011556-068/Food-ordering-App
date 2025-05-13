import Modal from "../../UI/Modal.jsx";
import currencyFormat from "../../utils/formatting";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

import ProgressCart from "../../store/ProgressCart";
import Input from "./Input.jsx";
import Button from "../../UI/Button.jsx";
 export default function CheckOut (){

    const cartCtx = useContext(CartContext);
    const progressCtx = useContext(ProgressCart);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity * item.price
      ,0);
     function handleClose(){
        progressCtx.hideCheckout();
     } 
        return (
         <Modal open={progressCtx.progress === 'checkout'} className="cart"  >
            <form action="">
                <h2>Checkout</h2>
                <p>Total Amount:{currencyFormat.format(cartTotal)}</p>
          <Input label="Full-Name" text="name" id="full-name" />
          <Input label="E-Mail Address" type="email" id="email" />
        < Input label="Street" type="text" id="street" />
        <div className="control-row">
            <Input label="Postal Code" type="text"id="postal-code" />
            <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Submit Order</Button>
        </p>
            </form>
    </Modal>
    )
 }