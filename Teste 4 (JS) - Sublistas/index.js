//TO DO
//comparar listas
const A = [1, 2, 3];
const B = [1, 2, 3, 4, 5];

const sublistas =  (listaA, listaB) => {
  const sublistaA = listaA.every(item => listaB.includes(item))
  const sublistaB = listaB.every(item => listaA.includes(item))

  if(sublistaA && sublistaB){
    return  "A é igual a B";
  }

  if(sublistaA){
    return "A é uma sublista de B";
  }

  if(sublistaB){
    return "B é uma sublista de A"
  }
}

console.log("Teste A sublista: ", sublistas(A, B));
console.log("Teste B sublista: ", sublistas(B, A));
console.log("Teste iguais: ", sublistas(B, B));



