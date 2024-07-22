// exercice 2
// Déclaration avec var
var globalVar = "Je suis une variable globale";
function varExample() {
    var localVar = "Je suis une variable locale";
    if (true) {
        var localVar = "Je suis toujours une variable locale dans un bloc";
        console.log(localVar); // "Je suis toujours une variable locale dans un bloc"
    }
    console.log(localVar); // "Je suis toujours une variable locale dans un bloc"
}
varExample();
console.log(globalVar); // "Je suis une variable globale"
// Déclaration avec let
var globalLet = "Je suis une variable globale avec let";
function letExample() {
    var localLet = "Je suis une variable locale avec let";
    if (true) {
        var blockLet = "Je suis une variable de bloc avec let";
        console.log(blockLet); // "Je suis une variable de bloc avec let"
    }
    console.log(localLet); // "Je suis une variable locale avec let"
}
letExample();
console.log(globalLet); // "Je suis une variable globale avec let"
// Déclaration avec const
var globalConst = "Je suis une constante globale";
function constExample() {
    var localConst = "Je suis une constante locale";
    if (true) {
        var blockConst = "Je suis une constante de bloc";
        console.log(blockConst); // "Je suis une constante de bloc"
    }
    console.log(localConst); // "Je suis une constante locale"
}
constExample();
console.log(globalConst); // "Je suis une constante globale"
// Mutabilité
var mutableLet = "Je peux être modifiée";
mutableLet = "Je suis modifiée";
var immutableConst = "Je ne peux pas être modifiée";
// immutableConst = "Erreur si je tente de me modifier"; 
console.log(mutableLet); // "Je suis modifiée"
console.log(immutableConst); // "Je ne peux pas être modifiée"
