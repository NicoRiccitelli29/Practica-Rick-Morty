import Tarjeta from './Tarjeta'
//import rickandmorty from '../rickandmorty.json'
import React, {Component} from 'react'; 


class Main extends Component{
    constructor() {
        super();
        this.state = {
            items: [],
           contador: 0
        }
    }
    componentDidMount(){
        this.resetDefault();
    }
    

    resetDefault() {
        fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then(result => result.json())
        .then(data => {
            this.setState({items : data.results, nextPage: data.info.next, lastPage: data.info.last, contador: 0});
            console.log(data.results);
        })
        
    }
    agregarTarjeta(){
        fetch(this.state.nextPage)
            .then(result => result.json())
            .then(data => {
                this.setState({items : data.results, nextPage: data.info.next, lastPage: data.info.last});
                console.log(data.results);
            })
        }

    Borrar(idTarjeta){
               let resultado = this.state.items.filter((item)=>{
                    return item.id !== idTarjeta
                })
                this.setState({contador: this.state.contador +1 ,items: resultado})
                console.log("Tarjeta a borrar: "+ idTarjeta);
                console.log(this.state.contador);
                
        }
   
    render(){
    return(
        <div>
            <div>
            <button className="botonReset" onClick={this.resetDefault.bind(this)}>Reset</button>
            <button className="botonMore" onClick={this.agregarTarjeta.bind(this)}>More Cards</button>
            <div className= "contador">
                Tajetas eliminadas : {this.state.contador}
            </div>
            </div>
           { 
            this.state.items.map((unaTarjeta, idx) =>{
                return(<Tarjeta  key={idx} infoTarjeta={unaTarjeta} borrar={this.Borrar.bind(this)} colorFondo="white"/>)
            })
           }
          
        </div>
   )
 } 
}

export default Main