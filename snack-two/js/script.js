// Definizione dell'array di squadre di calcio con proprietà  0
const squadreCalcio = [
    {
        nome: "Squadra1",
        puntiFatti: 0 , 
        falliSubiti: 0 , 

    },
    {
        nome: "Squadra2",
        puntiFatti: 0 , 
        falliSubiti: 0 , 

    },
    {
        nome: "Squadra3",
        puntiFatti: 0 , 
        falliSubiti: 0 , 

    },
    {
        nome: "Squadra4",
        puntiFatti: 0 , 
        falliSubiti: 0 , 

    },
]


// Funzione per  num
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/*let newPuntiFatti = getRandomNumber(1 , 100);
console.log(newPuntiFatti);

let newFalliSubiti = getRandomNumber(1, 100);
console.log(newFalliSubiti);*/


//  numeri casuali puntiFatti e falliSubiti 
squadreCalcio.forEach(squadra => {
    squadra.puntiFatti = getRandomNumber(1, 100);
    squadra.falliSubiti = getRandomNumber(1, 100);
});

// Creazione di un nuovo array, destrutturazione contenente solo nomi falli subiti
// const nuovoArray = [];

//UTILIZZO DI MAP INVECE DI FOR-EACH

// Creazione di un nuovo array contenente solo nomi e falli subiti usando map
const nuovoArray = squadreCalcio.map(squadra => {
    const { nome, falliSubiti } = squadra;
    return { nome, falliSubiti };
});

console.log(nuovoArray);

/*squadreCalcio.forEach(squadra => {
    const { nome, falliSubiti } = squadra;
    nuovoArray.push({ nome, falliSubiti });
});
console.log(squadreCalcio);
console.log(nuovoArray);*/

// elemento <ul> 
const ulElement = document.createElement('ul');

// Iterazione squadreCalcio
squadreCalcio.forEach(squadra => {
    // Creazione li x squadra
    const liElement = document.createElement('li');

    // Aggiunta testo
    liElement.textContent = `Nome: ${squadra.nome}, Falli subiti: ${squadra.falliSubiti}`;

    // Aggiunta dell'elemento <li> 
    ulElement.appendChild(liElement);
});

// Aggiunta dell'elemento <ul> 
document.body.appendChild(ulElement);
