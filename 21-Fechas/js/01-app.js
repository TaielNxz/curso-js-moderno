const diaHoy = new Date('2-4-2001');
const diaHoy2 = new Date('february 4 2001');
console.log(diaHoy);
console.log(diaHoy2);


let valor = new Date();

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(2010);

console.log(valor);
