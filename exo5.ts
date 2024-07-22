// Définition des alias de type
type Person = {
    name: string;
    age: number;
    email: string;
};

type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

type Order = {
    orderId: number;
    customer: Person;
    products: Product[];
    totalAmount: number;
};

// Création de variables utilisant les alias de type
const customer: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const product1: Product = {
    id: 1,
    name: "Apple",
    price: 1.2,
    inStock: true
};

const product2: Product = {
    id: 2,
    name: "Banana",
    price: 0.8,
    inStock: false
};

const order: Order = {
    orderId: 1001,
    customer: customer,
    products: [product1, product2],
    totalAmount: product1.price + product2.price
};

// Affichage des résultats
console.log("Customer:", customer);
console.log("Products:", [product1, product2]);
console.log("Order:", order);
