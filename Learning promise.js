const p1 = new Promise(function(resolve, reject) {
   setTimeout(function() {
      console.log('p1 ejecutado');
      resolve({num: 1});
   }, 1000);
});

p1.then(() => console.log(p1));
 