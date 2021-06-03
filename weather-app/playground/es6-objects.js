// object property shorthand
const name = 'Edison';
const userAge = 39;
const user = {
    name, // shorthand syntax
    age: userAge,
    location: 'Quito',
};

console.log(user);

// object destructoring
const product = {
    label: 'ktm 690',
    price: 9000,
    stock: 1,
    salePrice: undefined,
};

// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
};

transaction('order', product);


