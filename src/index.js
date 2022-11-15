import React from 'react';
import ReactDOM from 'react-dom/client';
//Se importa los estilos de index.css
//Tener en cuenta que esta importación puede ser innecesaria si los estilos del componente App (de App.js) solo sobrescriben al contenido de esta
import './index.css';
//Se importa App.js (sin el .js)
import App from './App';


/*
- Se guarda dentro de una constante root el resultado de tomar el div que tiene el id 'root' dentro del index.html y luego usar el método .createRoot de la librería ReactDom.
- Se hace un render de la constante root
- Lo que va a pasar es que el contenido de aquel div va ser el componente <App />
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




