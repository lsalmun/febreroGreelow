// EJERCICIO 1

var arrayContdown = []

const regresivo = (a) => {
    
    if(a < 1) return
    arrayContdown.push(a)

    return regresivo(a - 1)
   
}
regresivo(8)
console.log(arrayContdown)



// EJERCICIO 2
myString = "neuquenneuquen"




 var palindromo = (n) => {
     //console.log(n)
     
    let inicio = myString.slice(n,n+1);
    let final = myString.slice(myString.length - (n + 1),myString.length - n);
     //console.log(inicio)
     //console.log(final)
  if(n <= (myString.length-2)/2)if (inicio == final) return palindromo ( n + 1)  
  else return "no lo es"
  else return "es un palindromo"
  
 }
console.log(palindromo(0))






// function factorial (n){

//     if (n==1 || n==0) return 1;
// else return n * factorial (n-1)
// }

// console.log (factorial(5))