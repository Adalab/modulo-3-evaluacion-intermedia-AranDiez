// creamos la funcion. Hacemos un fetch donde primero especificamos la url.
// despues decimos el primer then para recoger la respuesta y convertir a json
// el segundo then donde ya trabajo con los datos. En este caso no hay que "limpiarlos" asique trabajamos con ellos. Se les podria formatear cambiando el nombre, dándoles un id...

const quoteList = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default quoteList;
