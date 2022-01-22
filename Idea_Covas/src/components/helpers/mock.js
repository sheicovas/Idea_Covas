const productos = [
    {id: '1', categoria:'velas', name: "Vela 1", price: 250, foto: 'https://bohemiavelas.com.ar/producto/natural-vela-240-gramos/'},
    {id: '2', categoria:'velas', name: "Vela 2", price: 250, foto: 'https://bohemiavelas.com.ar/producto/natural-vela-240-gramos/'},
    {id: '3', categoria:'mates', name: "Mate 1", price: 200, foto: 'https://bohemiavelas.com.ar/producto/natural-vela-240-gramos/'},
    {id: '4', categoria:'mates', name: "Mate 2", price: 200, foto: 'https://bohemiavelas.com.ar/producto/natural-vela-240-gramos/'},
    {id: '3', categoria:'sahumerios', name: "Sahumerio 1", price: 150, foto: 'https://bohemiavelas.com.ar/producto/natural-vela-240-gramos/'},
    {id: '4', categoria:'sahumerios', name: "Sahumerio 2", price: 150, foto: 'https://bohemiavelas.com.ar/producto/natural-vela-240-gramos/'}
];


export const getFetch = new Promise ((res,rej)=> {
    //acciones
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(productos)
        }, 2000)
        
    }else{
        rej('404 not found')
    }
    
})