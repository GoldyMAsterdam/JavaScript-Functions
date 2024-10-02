
function berekenInhoudKubus(lengte, breedte, hoogte){
    return lengte * breedte * hoogte;
}
console.log(berekenInhoudKubus(10, 10, 20));

// ---------------------------------------------------------

function berekenInhoudCylinder(){
    let inhoud = Math.PI * (straal ** 2) * hoogte;
    return inhoud;
}

let straal = 7;
let hoogte = 12;

let inhoud = berekenInhoudCylinder(straal, hoogte);
console.log(inhoud);

// ---------------------------------------------------------

function berekenLangeZijdeDriehoek(a, b){
    return Math.sqrt(a * a + b * b);
}
let kantA = 420;
let kantB = 69;
let pythagorasoutput = berekenLangeZijdeDriehoek(kantA, kantB);

console.log(pythagorasoutput);

// ---------------------------------------------------------

let num1 = 20
let num2 = 40
let num3 = 60
let num4 = 80
let num5 = 100
let num6 = 120
let num7 = 140

let sum = num1 + num2 + num3 + num4 + num5 + num6 + num7;

let gemiddeld = sum / 7

console.log(gemiddeld)