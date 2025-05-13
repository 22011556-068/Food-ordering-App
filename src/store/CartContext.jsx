import { createContext, useReducer } from "react";
 
 const CartContext = createContext({
    items: [],
    addItems: (item)=> {},
    removeItems: (id) => {},
    
 });

   function cartReducer(state, action){
    if(action.type === "ADD_ITEM"){
  const existingCartItemsIndex = state.items.findIndex(
    (item)=> item.id === action.item.id );
    
    const updatedItems =  [...state.items];
  
   if(existingCartItemsIndex > -1){
    const existingItems =  state.items[existingCartItemsIndex];
     const updatedItem = {
     ...existingItems,
     quantity : existingItems.quantity + 1 

     }
     updatedItems[existingCartItemsIndex]= updatedItem;
   }
  
  else{
    updatedItems.push({...action.item , quantity : 1 });
   
  }
  return{...state, items: updatedItems}
}
    if(action.type === "REMOVE_ITEM"){
    const existingCartItemsIndex = state.items.findIndex(
    (item)=> item.id === action.id );

    const existingCartItems = state.items[existingCartItemsIndex];
    const updatedItems = [...state.items];
    if(existingCartItems.quantity === 1){
 
  updatedItems.splice( existingCartItemsIndex ,1);
    }
    else{
        const updatedItem = {
            ...existingCartItems,
            quantity : existingCartItems.quantity - 1
        }
      updatedItems[ existingCartItemsIndex] = updatedItem
    }
    return{...state, items: updatedItems}
    }
    return state;
   }
 export function CartContextProvider({children}){
  const [cart, dispatchCartAction] =  useReducer(cartReducer, {items :[]});
  function addItems(item){
    dispatchCartAction({type:  "ADD_ITEM", item})
  }
  function removeItems(id){
dispatchCartAction({type:"REMOVE_ITEM", id})
  }
    const cartContext = {
    items: cart.items,
    addItems,
    removeItems,
  }

  console.log(cartContext);
    return  <CartContext value={cartContext}>{children}</CartContext>
  }


  export default CartContext;