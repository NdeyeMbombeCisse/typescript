var variable; // TypeScript inférera le type 'any' initialement
variable = 42; // La variable est maintenant inférée comme étant de type 'number'
console.log("Valeur et type après assignation d'un nombre:", variable, typeof variable);
variable = "Hello, TypeScript!"; // La variable est maintenant inférée comme étant de type 'string'
console.log("Valeur et type après assignation d'une chaîne de caractères:", variable, typeof variable);
variable = true; // La variable est maintenant inférée comme étant de type 'boolean'
console.log("Valeur et type après assignation d'un booléen:", variable, typeof variable);
