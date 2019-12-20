
"user strick"

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
    console.log(`poddana liczba ${AAA} jest w przedziale`) // && musza sie wszystkie zapytania argumenty zgadzac bo inaczej bedzie false
}
else {
    console.log(`poddana liczba ${AAA} nie jest w przedziale`)
}

let CCC = 16;
let DDD = 8;
if ((CCC + DDD) === 8 || (CCC - DDD )=== 8) {  
    console.log(true)
}                           // tu moze sie zgadzac tylko 1 argument wartosc i bedzie true
else {
    console.log(false)
}
let swiatlo = "zielone";

if (swiatlo === "czerwone") {
    console.log("stoj")
}
else if (swiatlo === "zolte") { //
    console.log("zwolnij")
}

else if (swiatlo === "zielone") { //
    console.log("jedz")
}
else{
    console.log("sygnalizacja nie dziala")
}

let medal = "brazo";
switch(medal){
case "zloty" :
console.log("masz zloty medal");
break;
case "srebrny" :
console.log("masz medal srebrny")
break;
case "brazowy" :
console.log("masz brazowy")
break;
default:
console.log("nie zdobyles medalu")
break;

}

let koszulka = "zolta";
switch(koszulka){
case "czarna" :
console.log("kosztuje 1€");
break;
case "biala" :
console.log("kosztuje 8€")
break;
case "zolta" :
console.log("kosztuje 15€")
break;
default:
console.log("nie takiej koszulki")
break;

}


function mar(string) { // FUNKCJA MUSI MIEC NAZWE I PARAMETR W NAWIASIE(JEST PUSTY NIE ZDEFINIOWANY)
    return string.charAt(3)
}
let X = "bayern"; // TU JEST DEFINICJA PARAMETRU 
console.log(mar(X)) // A TU JEST WYWOLANIE FUNKCJI I PODSTAWIENIE PARAMETRU

// function paw(AAAA) {
//     return AAAA[AAAA.length -2];

function paw(AAAA) {
    return AAAA.slice(-1)[0]// inna wersja nawias
}
let Y = ["apple", "orange", "banana"]
console.log(paw(Y))

let mar1 = (string) => string.charAt(3)
let z = "bayern"; 
console.log(mar1(z)) 

let paw2 = (AAAA) => AAAA.slice(-2)[0]
let Ys = ["apple", "orange", "banana"]
console.log(paw2(Ys))



let losowanie =(tablica) => {
    let result = "";
    for (let i = 0; i < 4; i++){
    let test = tablica[(Math.floor(Math.random()* tablica.length))]
    result = result + " " + test 
    }
    return result
}
let imiona = ["MARIUSZ","PAWEL","MARCO","SUSKI","GEAL","MAJID", "VIKTORIA", "VATIH","VADIM","MELAD","SIMONA","ANDREAS","KINAN"]
console.log(losowanie(imiona))
