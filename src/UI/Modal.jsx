import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"

 export default function Modal({children,open,close,className= ''}){
  const dialog =  useRef();
  useEffect(()=>{
 if(open){
 dialog.current.showModal();
 } if(close){
  dialog.current.close();
 }
  },[open,close])
    return  createPortal( 
    <dialog ref={dialog} className={`modal ${className}`} >
        {children}
    </dialog> , document.getElementById('modal'));
 }