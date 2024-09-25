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
