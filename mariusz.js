const wiek = 18; // stala nie ziemnna

let use = 20;
if (use >= wiek) { // if zawsza w nawiasach proste tak jak w konsoli
    // console.log("to mozesz wejsc")
    console.log(`to mozesz wejsc, bo masz ${use} lat!`)// `` ukosny musi byc anie "" ''
    console.log("to mozesz weisc bo masz " + use + " lat")  // inne  cudzyslow ale dluzsze cody!
}
else {
    // console.log("zabronione")
    console.log(`zabronione bo masz za ${use} lat`)
}

let A = 10;
let B = 20;
let C = 30;

if ((A+B) >= C) {
    console.log(`A plus B jest wieksze od ${C}`)
}
else {
    console.log( `A nie jest wieksze od ${C}`)
}