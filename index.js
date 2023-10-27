// let a = 4;
// let res;

// res = a > 10 ? console.log(true): console.log(false);



// 1) 

//  let a = [1, 2, 3, 4, 5, 6, 7, 8];
//  let b = [];
//  function oddNumber(a) {
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i]%2 == 1) {
//             b.push(a[i]);
//         }
//     }  return b;
//  }
//  console.log(oddNumber(a));



// 2)

// const numbers = [1, 4, 5, 3, 7,4, 8];
// const res = [];
// let a = function (){
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i]%2 == 1) {
//         numbers[i] = numbers[i]**2;
//         res.push(numbers[i]);
//     } else {
//         numbers[i] = numbers[i]**3;
//         res.push(numbers[i]);
        
//     }
//     } return res;
//  }
//     console.log(a(numbers));


// 3)

// const numbers = [1, 21, 2, 64, 5, 45, 3, 95];
// const res = [];
// function checkNumber() {
//     for ( let i = 0; i <= numbers.length; i++) {
//         if (numbers[i]%5 == 0 || numbers[i]%3 == 0) {
//             res.push(numbers[i]);
//         }
//     } return res;
// }

// const storage = {
//     checkedNum : checkNumber,
//     numbers : numbers
// };
// localStorage.setItem('storage', JSON.stringify(storage));

// 5)

// let num = 1456;


// function oddNumber() {
//     const splitNum = num.toString().split('');
//     console.log(splitNum);
// }

// oddNumber();

// 6)

//  const a = 'salom bolalar';

//  function replaceSentence() {
//     const b = a.split('');
//     console.log(b);
//     const c = b.filter(replaceof);
//     function replaceof() {
//         return
//     }
//  }
//  replaceSentence();

// 4)

 const arr = ['BMW', 'Audi', 'Ferrari', 'Bugatti'];
 const newArray = [];
 const newArr = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let cars = arr[i];
        let firstLetter = cars.charAt(0);
        newArray.push(firstLetter);
        
    } return newArray;
 }
 console.log(newArr(arr));