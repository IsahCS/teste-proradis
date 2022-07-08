const A = [1,2,3,null,4,null,5];
const B = [1,2,3,null,4,null,5,-1,6,7];
const C = [1,2,3,null,4,null,5,6,7,8,9];
const D = [1,2,3,null,4,null,5];

const filtrarValoresVazios = (array) => array.filter((element) => element != null )

console.log(filtrarValoresVazios(A));
console.log(filtrarValoresVazios(C));
console.log(filtrarValoresVazios(B));
console.log(filtrarValoresVazios(D));



