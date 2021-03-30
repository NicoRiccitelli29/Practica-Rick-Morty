import Tarjeta from './Tarjeta'
import rickandmorty from '../rickandmorty.json'


function Main(props){
    return(
        <div>
           { 
            rickandmorty.map((unaTarjeta, idx) =>{
                return(<Tarjeta  key={idx} infoTarjeta={unaTarjeta}/>)
            })
           }
        </div>
   )
}
export default Main