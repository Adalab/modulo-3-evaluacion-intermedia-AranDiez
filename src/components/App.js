import '../styles/App.scss';

// 1- Despues de hacer un boceto con el html, hago un service para fetch y otro para ls y los importo
import getQuotes from '../services/fetch';
import ls from '../services/localStorage';
// 2 - Importo el hook useState y useEffect
import { useEffect, useState } from 'react';

function App() {
  // 1b - uso fetch y local storage
  useEffect(() => {
    if (data.length === 0) {
      getQuotes().then((datafromAPI) => {
        ls.set('quotes', datafromAPI);
        setData(datafromAPI);
      });
    }
  }, []);
  // 3 - Variable de estado con la lista de quotes
  const [data, setData] = useState(ls.get('quotes', []));

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
  // 8 - Creo una variable de estado que esté pendiente del filtrado de ambos
  const [searchQuote, setSearchQuote] = useState('');
  const [searchCharacter, setSearchCharacter] = useState('all');
  // 9 - Hago un evento que pille lo que se escribe. He puesto un onchange en el input que la llama.
  const handleSearchQuote = (ev) => {
    setSearchQuote(ev.target.value);
  };
  const handleSearchCharacter = (ev) => {
    setSearchCharacter(ev.target.value);
  };
  // 4 - creo la constante y hago map de data para que no solo renderice una vez. Hago el map para que me pinte el array (la lista). Hago tambien key para filtrar luego.
  // 10 - Filtro segun quote y character

  const htmlData = data
    .filter((quote) =>
      quote.quote.toLowerCase().includes(searchQuote.toLowerCase())
    )
    .filter((quote) => {
      if (searchCharacter === 'all') {
        return true;
      } else if (searchCharacter === quote.character) {
        return true;
      } else {
        return false;
      }
    })

    .map((quote, i) => (
      <li className="li" key={i}>
        {`"${quote.quote}" - ${quote.character}`}
      </li>
    ));

  return (
    <div className="App">
      <header className="header">
        <h1>Quotes from friends</h1>
      </header>
      <section className="section1">
        <form className="form">
          <label htmlFor="filterText"> Filter by quote </label>
          <input
            type="text"
            name="filterText"
            id="filterText"
            placeholder="Filter"
            value={searchQuote}
            onChange={handleSearchQuote}
          />
          <label htmlFor="filterCha"> Filter by character </label>
          <select
            name="filterCha"
            id="filterCha"
            value={searchCharacter}
            onChange={handleSearchCharacter}
          >
            <option value="all">All</option>
            <option value="Ross">Ross</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
          </select>
        </form>
      </section>
      <section className="section2">
        <ul>{htmlData}</ul>
      </section>
      <section className="section3">
        <h2>Add a new quote</h2>
        <form className="form">
          <label htmlFor="quote"> Quote: </label>
          <input
            type="name"
            name="quote"
            id="quote"
            placeholder="Quote"
            onChange={handleNewQuote}
            value={newQuote.name}
          />
          <label htmlFor="character"> Character: </label>
          <input
            type="name"
            name="character"
            id="character"
            placeholder="Character"
            onChange={handleNewQuote}
            value={newQuote.character}
          />
          <input
            type="submit"
            value="Add a new quote"
            onClick={handleClick}
            className="input"
          />
        </form>
      </section>
    </div>
  );
}

export default App;
