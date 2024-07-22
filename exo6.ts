// Exercice 6 :
// Écrivez un programme TypeScript qui définit une énumération Color avec les
// valeurs Red, Green, White et Blue. Créez une variable selectedColor de type Color
// et assignez-lui une des valeurs de l&#39;énumération.

// Définition de l'énumération Color
enum Color {
    Red = "Red",
    Green = "Green",
    White = "White",
    Blue = "Blue"
}

// Création d'une variable selectedColor de type Color
let selectedColor: Color = Color.Green; // Assignation d'une valeur de l'énumération

// Affichage de la valeur de selectedColor
console.log("La couleur sélectionnée est:", selectedColor);
