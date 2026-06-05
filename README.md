# JavaScript Array Methods — დავალებები

## 1. რიგის მართვა (`push` და `unshift`)

**პირობა:** მოცემულია სტუდენტების სია. მასივის ბოლოში დაამატე `"Luka"`, ხოლო მასივის დასაწყისში დაამატე `"Nia"`.

```javascript
const students = ["Sandro", "Mariam", "Dato"];

// შენი კოდი აქ...
students.push("Luka");
students.unshift("Nia");

console.log(students);

// მოსალოდნელი შედეგი: ["Nia", "Sandro", "Mariam", "Dato", "Luka"]
```

---

## 2. ზედმეტი მონაცემების წაშლა (`pop` და `shift`)

**პირობა:** მასივში შეცდომით მოხვდა ზედმეტი ფერები დასაწყისში და ბოლოში. გამოიყენე შესაბამისი მეთოდები, რომ წაშალო პირველი და ბოლო ელემენტი.

```javascript
const colors = ["Black", "Red", "Green", "Blue", "White"];

// შენი კოდი აქ...

colors.pop("white");
colors.shift("black");

console.log(colors);

// მოსალოდნელი შედეგი: ["Red", "Green", "Blue"]
```

---

## 3. მომხმარებლის სახელის შემოწმება (`includes`)

**პირობა:** `usernames` მასივში შენახულია დარეგისტრირებული სახელები. ახალ მომხმარებელს სურს დაირქვას `"admin"`. `includes` მეთოდით შეამოწმე, ხომ არ არის უკვე დაკავებული ეს სახელი. პასუხი დაბეჭდე კონსოლში.

```javascript
const usernames = ["john_doe", "admin", "super_user"];
const newName = "admin";

// შენი კოდი აქ...

console.log(usernames.includes("admin"));


// მოსალოდნელი შედეგი: true
// ან შეგიძლია if პირობით დაბეჭდო: "სახელი დაკავებულია"
```

---

## 4. საუკეთესო სამეული (`slice`)

**პირობა:** მოცემულია მარათონში ფინიშთან მისული მორბენლების სია თანმიმდევრობით. `slice` მეთოდით ამოჭერი პირველი 3 მორბენალი და შეინახე ახალ ცვლადში. ორიგინალი მასივი არ უნდა შეიცვალოს.

```javascript
const runners = ["Nika", "Tornike", "Salome", "Beka", "Lela"];

// შენი კოდი აქ...

const newRunners = runners.slice(0, 3);
conole.log(runners);
console.log(newRunners);

// მოსალოდნელი შედეგი: ["Nika", "Tornike", "Salome"]
```

---

## 5. ტექსტის რედაქტირება (`splice`)

**პირობა:** მასივში სიტყვების სახით წერია წინადადება. შეცდომით წერია `"Python"`. გამოიყენე `splice` მეთოდი, რათა ამოჭრა `"Python"` და მის ადგილას ჩასვა `"JavaScript"`.

```javascript
const sentence = ["I", "love", "Python", "very", "much"];

// შენი კოდი აქ...
const newSentence = sentence.splice(2, 1, "JavaScript");
console.log(sentence);

// მოსალოდნელი შედეგი: ["I", "love", "JavaScript", "very", "much"]
```

---

## 6. ვალუტის კურსის კონვერტაცია (`map`)

**პირობა:** მოცემულია პროდუქტების ფასები ლარში. შექმენი ახალი მასივი `usdPrices`, სადაც თითოეული ფასი გადაყვანილი იქნება დოლარში. ჩავთვალოთ, რომ კურსი არის `2.7`.

```javascript
const gelPrices = [27, 54, 13.5, 108];

// შენი კოდი აქ...
const usdPrices = gelPrices.map((price) => {
    return price / 2.7;
})

console.log(usdPrices);

// მოსალოდნელი შედეგი: [10, 20, 5, 40]
```

---

## 7. ჩაბარებული გამოცდები (`filter`)

**პირობა:** მოცემულია სტუდენტის მიერ მიღებული ქულები სხვადასხვა საგანში. გამოცდა ჩაბარებულად ითვლება, თუ ქულა არის 51 ან მეტი. `filter` მეთოდის გამოყენებით შექმენი მასივი, სადაც მხოლოდ ჩაბარებული საგნების ქულები იქნება.

```javascript
const grades = [45, 78, 92, 33, 51, 88, 49];

// შენი კოდი აქ...
const passedExam = grades.filter((score) => score >= 51);

console.log(passedExam);

// მოსალოდნელი შედეგი: [78, 92, 51, 88]
```

---

## 8. გავლილი მანძილი კვირის განმავლობაში (`reduce`)

**პირობა:** `distances` მასივში შენახულია კილომეტრები, რომლებიც მომხმარებელმა გაიარა ორშაბათიდან კვირის ჩათვლით. იპოვე ჯამური გავლილი მანძილი `reduce` მეთოდის გამოყენებით.

```javascript
const distances = [5, 3, 8, 2, 10, 4, 6];

// შენი კოდი აქ...
const distanceSum = distances.reduce((acc, elem) => {
    return acc + elem;
}, 0);

console.log(distanceSum);

// მოსალოდნელი შედეგი: 38
```

---

## 9. საეჭვო ტრანზაქციის პოვნა (`find`)

**პირობა:** ბანკის ამონაწერში შენახულია ტრანზაქციები. დადებითი რიცხვი ნიშნავს ჩარიცხვას, უარყოფითი — გადარიცხვას. იპოვე პირველივე უარყოფითი ტრანზაქცია `find` მეთოდით.

```javascript
const transactions = [150, 200, -50, 400];

// შენი კოდი აქ...
console.log(transactions.find((amount) => amount < 0));

// მოსალოდნელი შედეგი: -50
```

---

## 10. აქტიური პროდუქტების სახელების სია (`filter` და `map`)

**პირობა:** მოცემულია პროდუქტების სია. თითოეულ პროდუქტს აქვს `name`, `price` და `inStock` მნიშვნელობა. `filter` და `map` მეთოდების გამოყენებით შექმენი ახალი მასივი `activeProductNames`, სადაც მხოლოდ მარაგში არსებული პროდუქტების სახელები იქნება.

```javascript
const products = [
  { name: "Laptop", price: 2500, inStock: true },
  { name: "Phone", price: 1800, inStock: false },
  { name: "Mouse", price: 80, inStock: true },
  { name: "Keyboard", price: 150, inStock: true }
];

// შენი კოდი აქ...
const activeProductNames = products
.filter((product) => product.inStock)
.map((item) => item.name);

console.log(activeProductNames);

// მოსალოდნელი შედეგი: ["Laptop", "Mouse", "Keyboard"]
```

---

## 11. ჩაბარებული ქულების ჯამი (`filter` და `reduce`)

**პირობა:** მოცემულია სტუდენტის ქულები. გამოცდა ჩაბარებულად ითვლება, თუ ქულა არის 51 ან მეტი. `filter` და `reduce` მეთოდების გამოყენებით იპოვე მხოლოდ ჩაბარებული ქულების ჯამი.

```javascript
const examScores = [45, 78, 92, 33, 51, 88, 49];

// შენი კოდი აქ...

console.log(examScores
    .filter((score) => score >= 51)
    .reduce((acc, elem) => acc + elem));

// მოსალოდნელი შედეგი: 309
```

---

## 12. ფასდაკლებული პროდუქტების ფასები (`map` და `filter`)

**პირობა:** მოცემულია პროდუქტების ფასები ლარში. ჯერ თითოეულ პროდუქტს დააკელი 20% `map` მეთოდით, შემდეგ `filter` მეთოდით დატოვე მხოლოდ ის ფასები, რომლებიც 50 ლარზე მეტია.

```javascript
const prices = [40, 100, 75, 30, 200];

// შენი კოდი აქ...
console.log(prices.map((price) => price - price * 0.2)
      .filter((item) => item >= 50));

// მოსალოდნელი შედეგი: [80, 60, 160]
```

---

## 13. ძვირიანი პროდუქტების სახელები (`filter` და `map`)

**პირობა:** მოცემულია პროდუქტების სია. `filter` და `map` მეთოდების გამოყენებით შექმენი ახალი მასივი `expensiveProductNames`, სადაც მხოლოდ იმ პროდუქტების სახელები იქნება, რომელთა ფასი 100-ზე მეტია.

```javascript
const storeProducts = [
  { name: "Book", price: 35 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 600 },
  { name: "Pen", price: 5 }
];

// შენი კოდი აქ...
const expensiveProductNames = storeProducts
    .filter((product) => product.price > 100)
    .map((item) => item.name);

console.log(expensiveProductNames);

// მოსალოდნელი შედეგი: ["Headphones", "Monitor"]
```

---

## 14. სახელების გაფილტვრა ასოს მიხედვით (`filter` და `includes`)

**პირობა:** მოცემულია მომხმარებლების სახელები. `filter` და `includes` მეთოდების გამოყენებით შექმენი ახალი მასივი `filteredNames`, სადაც მოხვდება მხოლოდ ის სახელები, რომლებიც შეიცავს ასო `"a"`-ს.

```javascript
const names = ["Luka", "Nia", "Sandro", "Dato", "Giorgi"];

// შენი კოდი აქ...
const filteredNames = names.filter((name) => name.includes('a'));

console.log(filteredNames);

// მოსალოდნელი შედეგი: ["Luka", "Sandro", "Dato"]
```

---

## 15. კალათის ჯამური ფასი (`map` და `reduce`)

**პირობა:** მოცემულია კალათაში დამატებული პროდუქტები. თითოეულ პროდუქტს აქვს `price` და `quantity`. `map` და `reduce` მეთოდების გამოყენებით იპოვე კალათის ჯამური ღირებულება.

```javascript
const cart = [
  { name: "Apple", price: 2, quantity: 5 },
  { name: "Bread", price: 3, quantity: 2 },
  { name: "Milk", price: 4, quantity: 1 }
];

// შენი კოდი აქ...
console.log(cart.map((item) => item.price * item.quantity)
    .reduce((acc, elem) => acc + elem));

// მოსალოდნელი შედეგი: 20
```

---

## 16. პირველი სრულწლოვანი აქტიური მომხმარებელი (`filter` და `find`)

**პირობა:** მოცემულია მომხმარებლების სია. ჯერ `filter` მეთოდით დატოვე მხოლოდ აქტიური მომხმარებლები, შემდეგ `find` მეთოდით იპოვე პირველი აქტიური მომხმარებელი, რომლის ასაკიც არის 18 ან მეტი.

```javascript
const users = [
  { name: "Nika", age: 16, isActive: true },
  { name: "Mariam", age: 22, isActive: false },
  { name: "Dato", age: 19, isActive: true },
  { name: "Ana", age: 17, isActive: true }
];

// შენი კოდი აქ...
console.log(users.filter((user) => user.isActive)
    .find((item) => item.age > 18));

// მოსალოდნელი შედეგი: { name: "Dato", age: 19, isActive: true }
```

---

## 17. დადებითი რიცხვების გაორმაგება (`filter` და `map`)

**პირობა:** მოცემულია რიცხვების მასივი. `filter` მეთოდით დატოვე მხოლოდ დადებითი რიცხვები, შემდეგ `map` მეთოდით თითოეული მათგანი გააორმაგე.

```javascript
const numbers = [-3, 5, 0, 8, -2, 10];

// შენი კოდი აქ...

// მოსალოდნელი შედეგი: [10, 16, 20]
```
