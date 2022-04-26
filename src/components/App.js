import '../styles/App.scss';

// 1- Despues de hacer un boceto con el html, hago un archivo json para los datos que vendrían de la api y los importo
import quoteList from '../data/quotes.json';
// 2 - Importo el hook useState
import { useState } from 'react';

function App() {
  // 3 - Variable de estado con la lista de quotes
  const [data, setData] = useState(quoteList);
  // 4 - creo la constante y hago map de data para que no solo renderice una vez. Hago el map para que me pinte el array (la lista). Hago tambien key para filtrar luego.
  const htmlData = data.map((quote, i) => (
    <li key={i}>
      <p>
        {quote.quote} {quote.character}
      </p>
    </li>
  ));
  // 5 - Añadir nuevos contactos. Creo variable de estado objeto.
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });
  // 6 - creo una funcion para modificar el objeto que corresponda
  const handleNewQuote = (ev) => {
    setNewQuote({
      ...newQuote,
      [ev.target.id]: ev.target.value,
    });
  };
  // 7 - y una funcion para gestionar el click del boton (he puesto un onclick en el button y un value en los input para controlarlos)
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
    setNewQuote({
      quote: '',
      character: '',
    });
  };
  return (
    <div className="App">
      <section>
        <h1>Frases de friends</h1>
      </section>
      <section>
        <ul>{htmlData}</ul>
      </section>
      <section>
        <h2>Añadir una nueva frase</h2>
        <form>
          <label htmlFor="quote"> Frase </label>
          <input
            type="name"
            name="quote"
            id="quote"
            placeholder="Frase"
            onChange={handleNewQuote}
            value={newQuote.name}
          />
          <label htmlFor="character"> Personaje </label>
          <input
            type="name"
            name="character"
            id="character"
            placeholder="Personaje"
            onChange={handleNewQuote}
            value={newQuote.character}
          />
          <input
            type="submit"
            value="Añadir una nueva frase"
            onClick={handleClick}
          />
        </form>
      </section>
    </div>
  );
}

export default App;
