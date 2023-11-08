### Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

**Dati**
array di oggetti; ogni oggetto descrive una bici da corsa, key: nome, peso.

***Soluzione***
1. definire l'array di oggetti con le chiavi; 
2. per trovare la bici più leggera, iterare bici in un forEach loop con parametri keyNome e keyPeso ed un nested if per trovare la bici con il peso minore;
3. per stampare tutte le bici sotto 0.98kg, utilizzare una funzione con parametri array obj e peso; iterare l'obj con loop for.Each e nested if dove se il peso < pesoIdeale allora si stampa obj;
4. utilizzare template literal per stampare a schermo le info recuperate

