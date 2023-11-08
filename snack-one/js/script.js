// Definizione di un array di oggetti rappresentanti biciclette con nome e peso
const bici = [
    {
        nome: "Tarmac SL7",
        peso: 0.8,
    },
    {
        nome: "Wilier Filante",
        peso: 0.9,
    },
    {
        nome: "Alchemy Atlas",
        peso: 1,
    },
    {
        nome: "Arc8 Escapee DB",
        peso: 0.95,
    },
    {
        nome: "Argon18 Gallium Pro Disc",
        peso: 0.98,
    },
    {
        nome: "Aurum Magma",
        peso: 0.98
    },
];

// Stampa dell'array di biciclette nella console
console.log(bici);

// Estrazione della prima bicicletta e delle rimanenti usando la destrutturazione
const [firstBike, ...restOfBikes] = bici;
console.log("First bike:", firstBike.nome, firstBike.peso);

// Funzione per stampare le biciclette con peso inferiore a un valore specifico
function stampaLeBiciLeggere(obj, pesoLimite) {
    console.log(`Biciclette con peso < ${pesoLimite}:`);
    obj.forEach(({ nome, peso }) => {
        if (peso < pesoLimite) {
            console.log(`${nome} - ${peso}`);
        }
    });
}

// Chiamata alla funzione per stampare le biciclette con peso inferiore a 0.98
stampaLeBiciLeggere(bici, 0.98);

// Funzione per generare il markup HTML di una card per una bicicletta
function generateBikeCard(bici) {
    return `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                     <h5 class="card-title">${bici.nome}</h5>
                     <p class="card-text">${bici.peso}</p>
                </div>
            </div>    
        </div>
    `;
}

// Selezionamento dell'elemento HTML con la classe "row"
const rowElem = document.querySelector(".row");
let biciElems = "";

// Creazione di card HTML per ogni bicicletta e concatenazione dei risultati
for (let i = 0; i < bici.length; i++) {
    biciElems += generateBikeCard(bici[i]);
}

// Aggiunta delle card alla sezione HTML con la classe "row"
rowElem.innerHTML = biciElems;

// Trovare la bicicletta più leggera attraverso un ciclo forEach
let biciLeggera;

bici.forEach(({ nome, peso }) => {
    if (!biciLeggera || peso < biciLeggera.peso) {
        biciLeggera = { nome, peso };
    }
});

// Selezionamento dell'elemento HTML con la classe "leggera-bici" e aggiunta della card HTML della bicicletta più leggera
const curBiciLeggera = document.querySelector(".leggera-bici");
curBiciLeggera.innerHTML = generateBikeCard(biciLeggera);
