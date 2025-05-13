import { createContext, useState } from "react";
 const ProgressCart =  createContext({
    progress: '',
    showCart : ()=>{},
    hideCart : ()=>{},
    showCheckout : ()=>{},
    hideCheckout : ()=>{},
 });


 export function ProegressProvider({children}){
  const [enteredProgress, setEnteredProgress] = useState('');

  function showCart(){
    setEnteredProgress('cart');
  }
  function hideCart(){
    setEnteredProgress('');
  }
  function showCheckout(){
 setEnteredProgress('checkout');
  }
   function hideCheckout(){
 setEnteredProgress('');
   }

   const progressCtx = {
    progress : enteredProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
   }

    return <ProgressCart value={progressCtx}>
        {children}
        </ProgressCart>
  }

  export default ProgressCart;