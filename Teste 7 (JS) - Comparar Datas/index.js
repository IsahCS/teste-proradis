
function myFunction (a,b){
//TO DO
  var umaHr = 60 * 60 * 1000
  var horas = new Date( Math.abs(a - b));
  
  if( horas <= umaHr){
    return true
  } else {
    return false
  }
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')));
