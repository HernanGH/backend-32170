const numeroRandom = (min:number, max:number) => Math.floor(Math.random() * (max - min)) + min 

console.log( `RGB (${numeroRandom(0,255)},${numeroRandom(0,255)},${numeroRandom(0,255)})` );

