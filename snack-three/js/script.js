/*forEach(callbackFn)
forEach(callbackFn, thisArg)*/

/*const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]*/

const numbersArray = [];

// generare rndm num
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// riempire array con getRandomNumber
function fillArrayWithRandomNumbers(array, length, min, max) {
  for (let i = 0; i < length; i++) {
    array.push(getRandomNumber(min, max));
  }
}

// riempire array con 10 numeri casuali tra 1 e 100
fillArrayWithRandomNumbers(numbersArray, 10, 1, 100);

console.log(numbersArray);

// Funzione per ottenere una sottoarray dati gli indici a e b
function getSubArray(array, a, b) {
  if (a >= b || a < 0 || b > array.length) {
    // Gestione dell'input non valido, assicurandosi che a sia inferiore a b e entrambi siano all'interno dei limiti dell'array
    console.log("Input non valido!");
    return [];
  }

  //  array.filter per ottenere gli elementi tra  a e b + arrow function x filtrare gli elem con indice più grande di a e più piccolo di b
  return array.filter((value, index) => index >= a && index < b);
}

// Chiamata della funzione per ottenere nupvo array
const newArray = getSubArray(numbersArray, 1, 3);
console.log(newArray);

// Creazione dell'elemento <ul> per i numeri originali
const originalUlElement = document.createElement('ul');

// Iterazione sull'array 
numbersArray.forEach((value, index) => {
    // Creazione dell'elemento <li> x ogni valore 
    const liElement = document.createElement('li');

    liElement.textContent = ` ${value}`;

    // Aggiunta dell'elemento <li> alla lista originale
    originalUlElement.appendChild(liElement);
});

// Aggiunta dell'elemento <ul> della lista originale al corpo del documento
document.body.appendChild(originalUlElement);


// Creazione dell'elemento <ul> per la nuova lista
const newArrayUlElement = document.createElement('ul');

// Iterazione sull'array newArray
newArray.forEach((value, index) => {
    
    const liElement = document.createElement('li');

    liElement.textContent = ` ${value}`;

    newArrayUlElement.appendChild(liElement);
});

// Aggiunta dell'elemento <ul> della nuova lista al corpo del documento
document.body.appendChild(newArrayUlElement);



/*function getSubArray(array, a, b) {
    if (a >= b || a < 0 || b > array.length) {
      // a deve essere meno di b
      console.error("Input non valido");
      return [];
    }
  
    const resultArray = [];
  
    array.filter((value, index) => {
      if (index >= a && index < b) {
        resultArray.push(value);
      }
    });
  
    return resultArray;
  }
  
  
  const newArray = getSubArray(numbersArray, 1, 3);
  console.log(newArray); */