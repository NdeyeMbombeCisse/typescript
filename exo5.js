// Exercice 5 :
// Écrivez un programme TypeScript qui crée des alias de type pour des types de
// données complexes tels que des objets ou des types personnalisés. Utilisez-les
// pour définir des variables et expliquez comment ils améliorent la lisibilité du code.

// Création de variables utilisant les alias de type
var customer = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
var product1 = {
    id: 1,
    name: "Apple",
    price: 1.2,
    inStock: true
};
var product2 = {
    id: 2,
    name: "Banana",
    price: 0.8,
    inStock: false
};
var order = {
    orderId: 1001,
    customer: customer,
    products: [product1, product2],
    totalAmount: product1.price + product2.price
};
// Affichage des résultats
console.log("Customer:", customer);
console.log("Products:", [product1, product2]);
console.log("Order:", order);
