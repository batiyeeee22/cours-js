let recetteTotal = 0;
let billets1500 = 0;
let billets2500 = 0;
let age = 11;

do {
    if (age < 16) {
        console.log(`'âge ${age} ans : recette (1500 FCFA)`);
        recetteTotal += 1500;
        billets1500++;
    } else {
        console.log(`'âge ${age} ans : recette (2500 FCFA)`);
        recetteTotal += 2500;
        billets2500++;
    }
    age++;
} while (age <= 20);

console.log(`Recette totale : ${recetteTotal} FCFA`);
console.log(`Nombre de billets de 1500 FCFA : ${billets1500}`);
console.log(`Nombre de billets de 2500 FCFA : ${billets2500}`);