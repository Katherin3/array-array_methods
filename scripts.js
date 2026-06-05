// ## 1. რიგის მართვა (`push` და `unshift`)
const students = ["Sandro", "Mariam", "Dato"];

students.push("Luka");
students.unshift("Nia");

console.log(students);

// ## 2. ზედმეტი მონაცემების წაშლა (`pop` და `shift`)
const colors = ["Black", "Red", "Green", "Blue", "White"];

colors.pop("white");
colors.shift("black");

console.log(colors);

// ## 3. მომხმარებლის სახელის შემოწმება (`includes`)
const usernames = ["john_doe", "admin", "super_user"];
const newName = "admin";

console.log(usernames.includes("admin"));

// ## 4. საუკეთესო სამეული (`slice`)
const runners = ["Nika", "Tornike", "Salome", "Beka", "Lela"];

const newRunners = runners.slice(0, 3);
console.log(runners);
console.log(newRunners);

// ## 5. ტექსტის რედაქტირება (`splice`)
const sentence = ["I", "love", "Python", "very", "much"];

const newSentence = sentence.splice(2, 1, "JavaScript");
console.log(sentence);

// ## 6. ვალუტის კურსის კონვერტაცია (`map`)
const gelPrices = [27, 54, 13.5, 108];

const usdPrices = gelPrices.map((price) => {
    return price / 2.7;
})

console.log(usdPrices);

// ## 7. ჩაბარებული გამოცდები (`filter`)
const grades = [45, 78, 92, 33, 51, 88, 49];

const passedExam = grades.filter((score) => score >= 51);

console.log(passedExam);

// ## 8. გავლილი მანძილი კვირის განმავლობაში (`reduce`)
const distances = [5, 3, 8, 2, 10, 4, 6];

const distanceSum = distances.reduce((acc, elem) => {
    return acc + elem;
}, 0);

console.log(distanceSum);

// ## 9. საეჭვო ტრანზაქციის პოვნა (`find`)
const transactions = [150, 200, -50, 400];

console.log(transactions.find((amount) => amount < 0));

// ## 10. აქტიური პროდუქტების სახელების სია (`filter` და `map`)
const products = [
    { name: "Laptop", price: 2500, inStock: true },
    { name: "Phone", price: 1800, inStock: false },
    { name: "Mouse", price: 80, inStock: true },
    { name: "Keyboard", price: 150, inStock: true }
];

const activeProductNames = products
    .filter((product) => product.inStock)
    .map((item) => item.name);

console.log(activeProductNames);

// ## 11. ჩაბარებული ქულების ჯამი (`filter` და `reduce`)
const examScores = [45, 78, 92, 33, 51, 88, 49];

console.log(examScores
    .filter((score) => score >= 51)
    .reduce((acc, elem) => acc + elem));

// ## 12. ფასდაკლებული პროდუქტების ფასები (`map` და `filter`)
const prices = [40, 100, 75, 30, 200];

console.log(prices.map((price) => price - price * 0.2)
    .filter((item) => item >= 50));

// ## 13. ძვირიანი პროდუქტების სახელები (`filter` და `map`)
const storeProducts = [
    { name: "Book", price: 35 },
    { name: "Headphones", price: 150 },
    { name: "Monitor", price: 600 },
    { name: "Pen", price: 5 }
];

const expensiveProductNames = storeProducts
    .filter((product) => product.price > 100)
    .map((item) => item.name);

console.log(expensiveProductNames);

// ## 14. სახელების გაფილტვრა ასოს მიხედვით (`filter` და `includes`)
const names = ["Luka", "Nia", "Sandro", "Dato", "Giorgi"];

const filteredNames = names.filter((name) => name.includes('a'));

console.log(filteredNames);

// ## 15. კალათის ჯამური ფასი (`map` და `reduce`)
const cart = [
    { name: "Apple", price: 2, quantity: 5 },
    { name: "Bread", price: 3, quantity: 2 },
    { name: "Milk", price: 4, quantity: 1 }
];

console.log(cart.map((item) => item.price * item.quantity)
    .reduce((acc, elem) => acc + elem));

// ## 16. პირველი სრულწლოვანი აქტიური მომხმარებელი (`filter` და `find`)
const users = [
    { name: "Nika", age: 16, isActive: true },
    { name: "Mariam", age: 22, isActive: false },
    { name: "Dato", age: 19, isActive: true },
    { name: "Ana", age: 17, isActive: true }
];

console.log(users.filter((user) => user.isActive)
    .find((item) => item.age > 18));

// ## 17. დადებითი რიცხვების გაორმაგება (`filter` და `map`)
const numbers = [-3, 5, 0, 8, -2, 10];

console.log(numbers.filter((number) => number > 0)
    .map((item) => item * 2));