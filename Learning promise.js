const p1 = new Promise(function(resolve, reject) {
   setTimeout(function() {
      console.log('p1 ejecutado');
      resolve({num: 1});
   }, 1000);
});

// p1.then(() => console.log(p1));

const p2 = new Promise(function(resolve, reject) {
   setTimeout(function() {
       console.log('p2 ejecutado');
       resolve({num: 2});
   }, 2000);
   });
   
   
const p3 = new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log('p3 ejecutado');
         resolve({num: 3});
      }, 3000);
      })
   
// Solo cuando se resuelve la promesa 3 podemos obtener el resultado de las 3 promesas juntas.
// p1.then(() => console.log(p1, p2, p3));
// p2.then(() => console.log(p1, p2, p3));
// p3.then(() => console.log(p1, p2, p3));
 

// Utilizando Promise.all(), éste nos da una respuesta luego de que se terminaron de ejecutar todas las promesas que le
// pasamos, y nos devuelve el resultado en el orden ingresado, sin importar que promesa se ejecutó primero

const promises = [p1, p2, p3];

Promise.all(promises)
   .then(() => console.log(p1, p2, p3));


// OJO: UNA PROMESA SIEMPRE DEVUELVE UN OBJETO.