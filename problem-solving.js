// 1.Task: Array Filtering and Mapping
const persons = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 28, gender: 'male' },
    { name: 'Diana', age: 22, gender: 'female' },
    { name: 'Eve', age: 35, gender: 'female' },
    { name: 'Frank', age: 40, gender: 'male' }
  ];
const femalePersonsName = persons.filter((person) => person.gender !== "female").map(person => person.name);
console.log(femalePersonsName)
 // 2.Task: Object Manipulation
 const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 }
  ];
  const filterBooksTitle = (books) =>{
    return books.map(book => book.title)
  }
  console.log(filterBooksTitle(books));
//   3. Task: Function Composition
const doubleNumber = (num) =>{
    return num * 2;
}
const squareNumber = (num) =>{
    return num * num;
}
const add5ToNumber = (num) =>{
    return num + 5;
}
const composeFunctions = (num) =>{
    const square = squareNumber(num);
    const double = doubleNumber(square);
    return add5ToNumber(double);
}
console.log(composeFunctions(5))
// 4. Task: Sorting Objects
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Accord', year: 2017 },
    { make: 'Ford', model: 'Mustang', year: 2021 },
    { make: 'Chevrolet', model: 'Malibu', year: 2018 },
    { make: 'Nissan', model: 'Altima', year: 2020 }
  ];
const sortCars = (cars) =>{
    return cars.map(car =>car.year).sort((a, b) => a -b);
}
console.log(sortCars(cars))
// 5. Task: Find and Modify
const updatePerson = (persons, updateName, updateAge) =>{
    const find = persons.find(person => person.name === updateName);
   if (find) find.age = updateAge
    return find;
}
console.log(updatePerson(persons, 'Bob', 22));
// 6. Task: Array Reduction
const numbers = [1, 4, 7, 9, 10, 13, 15, 16, 18, 20, 25, 28];
const arrayReduction = (array) =>{
 const result = array.reduce((acc, curr) =>{
    if(curr % 2 === 0){
        return acc + curr;
    }
    return acc;
  }, 0)
  return result;
}
console.log(arrayReduction(numbers));
// 7. Task: Leap Year Checker
const leapYearChecker = (year) =>{
  if(year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0)){
      console.log(`${year} is a Leap Year`)
  }else{
      console.log(`${year} is not a Leap Year`)
  }
}
leapYearChecker(2025);
// 8. Task: Count Vowels:
const countVowels = (string) =>{
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for(let s of string){
      if(vowels.includes(s)){
          count++;
      }
  }
  return count;
}
console.log(countVowels("Happy New Year"));
      
// 9. Task: Unique Values
const duplicateNumbers = [1, 4, 7, 9, 10, 13, 15, 16, 18, 20, 25, 28, 10, 4, 15];
const removeDuplicate = (numbers) =>{
    // return [...new Set(numbers)];
    return numbers.filter((num, index) => numbers.indexOf(num) ===  index);
}
console.log(removeDuplicate(duplicateNumbers));
     
// 10. Task: Find Maximum Value:
const findMaxNumber = (numbers) =>{
  let max = 1;
  for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i])
   if(numbers[i] > max){
       max = numbers[i];
       }
  }
  return max;
}
console.log(findMaxNumber(duplicateNumbers));

// 11. Task: Advanced Sorting
const students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [78, 82, 80] },
  { name: "Charlie", grades: [92, 91, 95] },
  { name: "David", grades: [85, 87, 84] },
  { name: "Eva", grades: [89, 90, 92] }
];
const sortByAvgGrade = (array) =>{
  const res = array.map((student) =>{
    const totalGrades = student.grades.reduce((acc, curr) => acc + curr, 0);
    const avgGrade = Math.round(totalGrades / student.grades.length);
    return {...student, avgGrade};
  })
  const sortedStudents = res.sort((a, b) => b.avgGrade-a.avgGrade);
  console.log(sortedStudents)
}
sortByAvgGrade(students);

12. // Task: Functional Programming - Reduce
const items = [
  { quantity: 2, price: 100 },
  { quantity: 5, price: 150 },
  { quantity: 1, price: 200 },
  { quantity: 4, price: 75 },
  { quantity: 3, price: 50 }
];
const calculateTotalArrayOfObjects = (items) =>{
    const res = items.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
  
  console.log(res)
}
calculateTotalArrayOfObjects(items);

13. // Task: Array Intersection
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
  const arrayIntersection = (array1, array2) =>{
    let newArray = [];
    array1.forEach(element => {
        if(array2.includes(element)){
            newArray.push(element)
        }
    });
    console.log(newArray)
  }
arrayIntersection(array1, array2);

14. // Task: Object Transformation
const customers = [
  { 
    name: "John Doe", 
    purchases: [
      { item: "Laptop", amount: 1200 },
      { item: "Mouse", amount: 25 },
      { item: "Keyboard", amount: 50 },
      { item: "Monitor", amount: 300 },
      { item: "Headset", amount: 100 },
      { item: "USB Cable", amount: 10 }
    ], 
    loyaltyPoints: 150 
  },
  { 
    name: "Jane Smith", 
    purchases: [
      { item: "Phone", amount: 800 },
      { item: "Headphones", amount: 100 }
    ], 
    loyaltyPoints: 200 
  },
  { 
    name: "Alice Johnson", 
    purchases: [
      { item: "Monitor", amount: 300 },
      { item: "Keyboard", amount: 50 },
      { item: "Mouse Pad", amount: 10 }
    ], 
    loyaltyPoints: 120 
  },
  { 
    name: "Bob Brown", 
    purchases: [
      { item: "Tablet", amount: 500 },
      { item: "Charger", amount: 30 },
      { item: "Case", amount: 25 },
      { item: "Screen Protector", amount: 10 },
      { item: "Earbuds", amount: 50 },
      { item: "Stylus", amount: 20 }
    ], 
    loyaltyPoints: 180 
  }
];
  
const objectTransform = (customers) =>{
 return customers.map(element => {
      if(element.purchases.length > 5){
          const newObject = {...element, loyaltyPoints: element.loyaltyPoints * 2}
          return newObject;
      }
      return element;
 })
  
}
console.log(objectTransform(customers));

// Task: Function Memoization

const memoize = (func) =>{
  const cache = new Map();
  
  return function(...args){
    const key = JSON.stringify(args); // Create unique key for cache based on argument
    
    if(cache.has(key)){ //check if it is already in cache
      console.log(key);
      return cache.get(key);
    }
  
  const result = func(...args); // call function if not cached
  cache.set(key, result); // store result in cache
  console.log(key);
  return result;
  }
}

const factorial = (n) =>{
  if(n === 0 || n === 1) return 1;
  return n*factorial(n-1);
}

const memoFactorial = memoize(factorial);
console.log(memoFactorial(10));
console.log(memoFactorial(10));
console.log(memoFactorial(15));
console.log(memoFactorial(15));