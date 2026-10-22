const prixGTA6 = 50000;  
const epargnesemaines = 4000; 

let argentAccumule = 0;         
let semaines = 0;              

while (argentAccumule < prixGTA6) {
    semaines++;      
    argentAccumule += epargnesemaines;  
    console.log(`Semaine ${semaines} : ${argentAccumule} FCFA épargnés`);
}