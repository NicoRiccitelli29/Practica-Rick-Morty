import React, {Component} from 'react'; 

class Tarjeta extends Component{
    constructor(props){
        super(props);
        this.state = {
            colorInicial:this.props.colorFondo,
            colorFondo : this.props.colorFondo,
        }
    }
    cambiarColor(color){
        if(this.state.colorFondo !=="orange")
        this.setState({
            colorFondo: color,
        })
        else
        this.setState({
            colorFondo: "orange",
        })
        console.log("Cambiamos el color por " + color);
    }
   borrarItem(){
       this.props.borrar(this.props.infoTarjeta.id)

   }
  
 
    

    render(){
        return(
            <div className="card-body" style={{backgroundColor: this.state.colorFondo}}
            onMouseEnter={() => this.cambiarColor("pink")}
            onMouseLeave={() => this.cambiarColor("white")}>
                    <img src={this.props.infoTarjeta.image} alt=""/>
                    <li className="list-group-item">Nombre:{this.props.infoTarjeta.name}</li>
                    <li className="list-group-item">Alive:{this.props.infoTarjeta.species}</li>
                    <li className="list-group-item">Origin:{this.props.infoTarjeta.origin.name}</li>
                    <button className="boton" onClick={() => this.cambiarColor("orange")}>Cambiar color</button>
                    <button className="boton" onClick={this.borrarItem.bind(this, this.props.id)}>Borrar Tarjeta</button>
            </div>
         )
    }
}

export default Tarjeta;