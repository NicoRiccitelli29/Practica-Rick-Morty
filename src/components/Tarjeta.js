function Tarjeta(props){
    return(
        <div className="card-body">
                <img src={props.infoTarjeta.image} alt=""/>
                <li className="list-group-item">Nombre:{props.infoTarjeta.name}</li>
                <li className="list-group-item">Alive:{props.infoTarjeta.species}</li>
                <li className="list-group-item">Origin:{props.infoTarjeta.origin.name}</li>
                
            </div>
    )
}

export default Tarjeta