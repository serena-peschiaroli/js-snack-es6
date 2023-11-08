// Definizione dell'array di squadre di calcio con proprietà inizializzate a 0
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


// Funzione per generare numeri casuali compresi tra min e max
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Esempio di generazione e stampa di numeri casuali separati per punti fatti e falli subiti
/*let newPuntiFatti = getRandomNumber(1 , 100);
console.log(newPuntiFatti);

let newFalliSubiti = getRandomNumber(1, 100);
console.log(newFalliSubiti);*/


// Assegnazione di numeri casuali alle proprietà puntiFatti e falliSubiti di ciascuna squadra
squadreCalcio.forEach(squadra => {
    squadra.puntiFatti = getRandomNumber(1, 100);
    squadra.falliSubiti = getRandomNumber(1, 100);
});

// Creazione di un nuovo array con destrutturazione contenente solo nomi e falli subiti
const nuovoArray = [];

squadreCalcio.forEach(squadra => {
    const { nome, falliSubiti } = squadra;
    nuovoArray.push({ nome, falliSubiti });
});
console.log(squadreCalcio);
console.log(nuovoArray);

// Creazione di un elemento <ul> per la lista
const ulElement = document.createElement('ul');

// Iterazione attraverso le squadreCalcio
squadreCalcio.forEach(squadra => {
    // Creazione di un elemento <li> per ogni squadra
    const liElement = document.createElement('li');

    // Aggiunta del testo all'elemento <li>
    liElement.textContent = `Nome: ${squadra.nome}, Falli subiti: ${squadra.falliSubiti}`;

    // Aggiunta dell'elemento <li> all'elemento <ul>
    ulElement.appendChild(liElement);
});

// Aggiunta dell'elemento <ul> al documento (ad esempio, al body)
document.body.appendChild(ulElement);
