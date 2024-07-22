// Définition de l'énumération Color
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["White"] = "White";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
// Création d'une variable selectedColor de type Color
var selectedColor = Color.Green; // Assignation d'une valeur de l'énumération
// Affichage de la valeur de selectedColor
console.log("La couleur sélectionnée est:", selectedColor);
