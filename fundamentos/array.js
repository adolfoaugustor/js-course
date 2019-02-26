const valores = [7.7, 7.6, 8.9, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[44]);
valores[10] = 3.4;
console.log(valores);
console.log(valores.length);

valores.push({id:2}, false, null, 'text')
console.log(valores);
console.log(valores.pop());
delete valores[0];
delete valores[11];
console.log(valores);

console.log(typeof valores);