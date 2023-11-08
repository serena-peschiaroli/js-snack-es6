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

console.log(bici);
const [firstBike, ...restOfBikes] = bici;
console.log("First bike:", firstBike.nome, firstBike.peso);


/*console.log("la bici più leggera è:", biciLeggera.nome, biciLeggera.peso);*/

function stampaLeBiciLeggere(obj, pesoLimite) {
    console.log(`Biciclette con peso < ${pesoLimite}:`);
    obj.forEach(({ nome, peso }) => {
      if (peso < pesoLimite) {
        console.log(`${nome} - ${peso}`);
        
      }
    });
}
  
stampaLeBiciLeggere(bici, 0.98);
  


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

const rowElem = document.querySelector(".row");
let biciElems = "";

for (let i = 0; i < bici.length; i++) {
    biciElems += generateBikeCard(bici[i]);
}

rowElem.innerHTML = biciElems;

let biciLeggera;

bici.forEach(({ nome, peso }) => {
    if (!biciLeggera || peso < biciLeggera.peso) {
        biciLeggera = { nome, peso };
    }
});


const curBiciLeggera = document.querySelector(".leggera-bici");
curBiciLeggera.innerHTML = generateBikeCard(biciLeggera);


 






