import { useState } from "react";


function ItemCount ({initial, stock, onAdd}) {
    const [contador, setcontador] = useState(initial);

    const handleSumar=()=>{
      if (contador< stock) {
        setcontador(contador+1)
      }
    }
    const handleRestar=()=>{
      if (contador> initial) {
        setcontador(contador-1)
      }
    }
    const agregar=()=>{
      onAdd(contador)
    }
  return (
      <>
      <div className="container w-50"><button className="btn btn-outline-primary" onClick={handleSumar}>+</button>
        {contador}
      <button className="btn btn-outline-primary" onClick={handleRestar}>-</button><br/>
      <button className="btn btn-outline-primary" onClick={agregar}> Agregar al carrito</button> 
      </div>
    
      </>
  ) 
}

export default ItemCount;
