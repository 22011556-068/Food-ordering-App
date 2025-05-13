import logoImg from '../assets/logo.jpg' 
import Button from '../UI/Button'  
import { useContext } from 'react'     
import CartContext from '../store/CartContext'
import ProgressCart from '../store/ProgressCart.jsx'

  export default function Header(){
   
   const cartCtx = useContext(CartContext);
  
   const totalCardItems = cartCtx.items.reduce((totalNumberOfItems,item)=>{
 return totalNumberOfItems + item.quantity
   },0);
   const progressCtx = useContext(ProgressCart);
   function handleCartSelection(){
    progressCtx.showCart();
   }

    return <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="Its an header image for our app" />
            <h1>Yummy Foods</h1>
            </div>
            <nav>
               <Button textOnly={true} onClick={handleCartSelection}>Cart ({totalCardItems})</Button>
            </nav>
        
    </header>
  }     