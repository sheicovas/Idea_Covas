import { useEffect, useState } from 'react'
import { Items } from './Item'
import NavBar from './NavBar/NavBar'
import Cartwidget from './CartWidget/Cartwidget'
import { getFetch } from './helpers/mock';
import ItemCount from './itemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemListContainer() {
    
    
    const [count, setCount] = useState( 0 )
    const [tiempo, setTiempo] = useState(Date)
    
    //let count = 0

    const handlerCount = () => {
        setCount(count+1)
       // count ++ // count = count +1
       setTiempo(Date())
    }

    const [productos, setProductos]= useState ([])
    const [loading, setloading] = useState(true)
    const [bool, setBool] = useState(true)

   useEffect(()=>{
    getFetch
    .then(res => setProductos(res))
   // .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
   }, [])
   console.log(productos)

   function onAdd(Cant) {
       console.log(Cant)
   }

    return (
        <div>
            <NavBar />
            <Items />
            {count}<br/>
            {tiempo}<br/><br/>
            <button onClick={ handlerCount }>Aumentar</button><br/>
            
            { loading ? <h2>Cargando...</h2> :
            productos.map( (prod) => 
            
            <div 
            key={prod.id}
            className='col-md-4'>
                <div className="card w-100 mt-5">
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='foto producto' className='w-50' />
                        {prod.price}
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            Detalle del producto
                        </button>
                    </div>
                    
                </div>

            </div>
            
            ) }
            <button onClick={()=> setBool (!bool)}>Press</button><br/>
            <ItemCount stock={5} initial={1} onAdd= {onAdd} />
        </div>
    )
}


export default ItemListContainer