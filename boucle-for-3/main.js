let multiplicateur = 5;
for (let i = 0; i < 10; i++) {
    console.log(`${multiplicateur} x ${i} = ` + multiplicateur * i);
}
for (let j = 0; j <= 9; j += 2) {
    console.log(`${multiplicateur} x ${j} = ` + multiplicateur * j);
}

for (let k = 20; 0 <= k; k -= 2) {
    console.log(k);
}
let grandprenom = [];
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama", "Tania", "William", "Alain"];
eleves.forEach(e => {
    if (e.length > 5) {
        grandprenom.push(e);
    }
});

let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
let grosseSomme = []

// sommes.forEach((element, i) => {
//     if (element > 60) {
//         grosseSomme.push(element);
//     }
// }
// );
// sommes = sommes.filter(e => e <= 60);

for(let i = 0; i < sommes.length; i++) {
    if (sommes[i] > 60) {
        grosseSomme.push(sommes[i]);
        sommes.splice(sommes.indexOf(sommes[i]), 1)
        i--
    }

}


console.log(grosseSomme)
console.log(sommes);

let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
let typeString = [], typeNumber = [], typeObject = [], typeAutre = [];
donnees.forEach(e => {
    switch (typeof (e)) {
        case "number":
            typeNumber.push(e);
            break;
        case "string":
            typeString.push(e);
            break;
        case "object":
            typeObject.push(e);
            break;
        default:
            typeAutre.push(e);
            break;
    }
});