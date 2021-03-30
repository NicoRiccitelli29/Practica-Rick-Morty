import React from 'react'
import Main from './components/Main'
import Header from './components/Header'


function App() {
  return (
    <div>
    <Header /> 
    <br></br>
    <div className="principal">
    <Main />
    </div>
    <footer className="footer">
      Integrante: Nicolás Riccitelli
    </footer>
    </div>
  );
}

export default App;
