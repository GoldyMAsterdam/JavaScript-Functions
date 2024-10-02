
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

function gemiddeld(a, b, c, d, e, f, g) {
    return ( a + b + c + d + e + f + g) / 7; 
}
console.log(gemiddeld(20, 40, 80, 160, 200, 300, 400));
