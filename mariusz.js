

const wiek = 18; // stala nie ziemnna

let use = 17;
console.log((use >= wiek) ? "mozesz wejsc" : "nie mozesz wejsc")

// if (use >= wiek) { // if zawsza w nawiasach proste tak jak w konsoli
// // console.log("to mozesz wejsc")
//     console.log(`to mozesz wejsc, bo masz ${use} lat!`)// `` ukosny musi byc a nie "" ''
//     console.log("to mozesz weisc bo masz " + use + " lat")  // inne  cudzyslow ale dluzsze cody!
// }
// else {
//     // console.log("zabronione")
//     console.log(`zabronione bo masz za ${use} lat`)
// }

let A = 10;
let B = 20;
let C = 30;

console.log((A+B) >= C ? "A + B jest wieksze od C" :  "A + B jest miejsze od C")
console.log((A+B) >= C ? `A + B jesz wieksze od ${C}` : `A + B jest miejsze od ${C}`)


// if ((A+B) >= C ) {
//     console.log(`A plus B jest wieksze od ${C}`)
// }
// else {
//     console.log( `A nie jest wieksze od ${C}`)
// }

//mozna zapisac w jednym ciagu znakow

// warunek( a>0) ? (zapytanie) jako piersze wyswietla true (zawsze) a potem false 
// ${wysietla zawartosc ziennej np.30}


let AAA = 20;
if (AAA >= 20 && AAA <= 40 && AAA !== 22) {  // 1 wieksze lub rowne !== nierownosc ===rownosc
    console.log(`poddana liczba ${AAA} jest w przedziale`)
}
else {
    console.log(`poddana liczba ${AAA} nie jest w przedziale`)
}

let CCC = 16;
let DDD = 8;
if ((CCC + DDD) === 8 || (CCC -DDD)===8) {
    console.log(true)
} 
else {
    console.log(false)
}