import React from 'react'

const Input = ({saludar}) => {
    return (
        <div>
            <p>Menú</p>
          <input placeholder='Ingresar nombre' />
          <button onClick={saludar}>Aceptar</button>
        </div>
    )
}

export default Input
