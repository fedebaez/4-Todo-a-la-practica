import './App.css';

//Lo que sigue no es HTML dentro de Js, si no que una sintaxis especial llamada JSX
//Tras bambalinas, lo que pasa es que aquella función va a ser transformada a código imperativo con Vanilla JS                
function App() {
  return (
    <div className="App">
      <h1>Hola putos</h1>
    </div>
  );
}

//La función App se define como App para ser exportada
export default App;
