import currencyFormat from "../../utils/formatting"

export default function CheckItems({name, quantity, price, onIncrease, onDecrease}){

    return  (
        <li className="cart-item">
        <p>
         {name} - {quantity} x {currencyFormat.format(price)}   
        </p>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
       
        </li>
    )
}