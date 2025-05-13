import cuurencyFormat from '../utils/formatting.js'
import Button from '../UI/Button.jsx'
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
export default function MealsItems({meal}){
 const cartCtx = useContext(CartContext);
  function handleCart(){
   cartCtx.addItems(meal);
  }
    return <article>
  <li className="meal-item" >
    <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
    <div>
        <h3>{meal.title}</h3>
        <p className="meal-item-price">{cuurencyFormat.format(meal.price)}</p>
        <p className="meal-item-description">{meal.description}</p>
       <Button textOnly={false} onClick={handleCart}>
        Add To Cart
       </Button>
    </div>
    </li>  
    </article>

}