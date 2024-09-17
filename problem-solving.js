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
