//  Exercice 2 :
// Écrivez un programme TypeScript qui déclare des variables en utilisant let, const et
// var. Décrivez ensuite comment chaque type de déclaration se comporte par rapport
// à la portée et à la mutabilité.

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
let globalLet = "Je suis une variable globale avec let";

function letExample() {
    let localLet = "Je suis une variable locale avec let";
    if (true) {
        let blockLet = "Je suis une variable de bloc avec let";
        console.log(blockLet); // "Je suis une variable de bloc avec let"
    }
   
    console.log(localLet); // "Je suis une variable locale avec let"
}

letExample();
console.log(globalLet); // "Je suis une variable globale avec let"


// Déclaration avec const
const globalConst = "Je suis une constante globale";

function constExample() {
    const localConst = "Je suis une constante locale";
    if (true) {
        const blockConst = "Je suis une constante de bloc";
        console.log(blockConst); // "Je suis une constante de bloc"
    }
    console.log(localConst); // "Je suis une constante locale"
}

constExample();
console.log(globalConst); // "Je suis une constante globale"


// Mutabilité
let mutableLet = "Je peux être modifiée";
mutableLet = "Je suis modifiée";

const immutableConst = "Je ne peux pas être modifiée";
// immutableConst = "Erreur si je tente de me modifier"; 

console.log(mutableLet); // "Je suis modifiée"
console.log(immutableConst); // "Je ne peux pas être modifiée"