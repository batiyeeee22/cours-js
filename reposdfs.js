let jour = "mardi";
console.log(`Aujourd'hui est ${jour}.`);

switch (jour.toLowerCase()) {
    case "mardi":
        console.log("C'est un jour de repos.");
        break;
    default:
        console.log("C'est un jour travaillé.");
}
