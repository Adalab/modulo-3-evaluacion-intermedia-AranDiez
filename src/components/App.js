import '../styles/App.scss';

// 1- Despues de hacer un boceto con el html, hago un archivo json para los datos que vendrían de la api y los importo
import quoteList from '../data/quotes.json';
// 2 - Importo el hook useState
import { useState } from 'react';

function App() {
  // 3 - Variable de estado con la lista de quotes
  const [data, setData] = useState(quoteList);

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
  // 8 - Creo una variable de estado que esté pendiente del filtrado
  const [search, setSearch] = useState('');
  // 9 - Hago un evento que pille lo que se escribe. He puesto un onchange en el input que la llama.
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  // 4 - creo la constante y hago map de data para que no solo renderice una vez. Hago el map para que me pinte el array (la lista). Hago tambien key para filtrar luego.
  // 10 - Meto en la variable de estado el valor del input y filtro por frase

  const htmlData = data
    .filter(
      (quote) =>
        quote.quote.toLowerCase().includes(search.toLowerCase()) ||
        quote.character.toLowerCase().includes(search.toLowerCase())
    )
    .map((quote, i) => (
      <li className="li" key={i}>
        <p>
          {quote.quote} {quote.character}
        </p>
      </li>
    ));

  return (
    <div className="App">
      <section className="section1">
        <h1>Frases de friends</h1>
        <form className="form">
          <label htmlFor="filterText"> Filtrar por frase </label>
          <input
            type="text"
            name="filterText"
            id="filterText"
            placeholder="Filtrar"
            onChange={handleSearch}
          />
          <label htmlFor="filterCha"> Filtrar por personaje </label>
          <select
            name="filterCha"
            id="filterCha"
            onChange={handleSearch}
            value={search}
          >
            <option>Todos</option>
            <option>Ross</option>
            <option>Monica</option>
            <option>Joey</option>
            <option>Phoebe</option>
            <option>Chandler</option>
            <option>Rachel</option>
          </select>
        </form>
      </section>
      <section className="section2">
        <ul>{htmlData}</ul>
      </section>
      <section className="section3">
        <h2>Añadir una nueva frase</h2>
        <form className="form">
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
            className="input"
          />
        </form>
      </section>
    </div>
  );
}

export default App;
