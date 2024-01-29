// 1
let array = [5,25,89,120,36]

array.push("javascript","python")
array.unshift("html","css")

console.log(array.length);

array.pop()
array.shift()

console.log(array);

// 2

let fruit = ["ფორთოხალი","ბანანი","მსხალი"]

console.log(fruit.length);

fruit.push("ვაშლი","ანანასი")
fruit.unshift("საზამთრო")

console.log(fruit);

fruit.shift()
fruit.shift()
fruit.unshift("საზამთრო","ფორთოხალი","მანგო")

console.log(fruit);

// 3

let array2 =[1, 2, 3, 4, 5]

let array3 =['a', 'b', 'c']

let spl = array2.splice(0,3)
let spl2 = array2.splice(0,2)

console.log(spl.concat(array3,spl2));

// 4

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((acc, element) => {
    return acc + element 
}, 0)

console.log(sum);

// 5

let array4=[2,15,10,24]

let filter = array4.filter((elem) => elem !== 10)

console.log(filter);

// 6

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let divide = array5.map((element) => element / 3)

console.log(divide);

// 7

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let retult = languages.filter((letter) => {
    return letter.length > 3;
});

console.log(retult);


// 8

let words = ['madrid', 'rome', 'milan', 'berlin'];

let result1 = words.filter((element) => {
    if ( element.includes ('n') || ('m'))
    return element
});

console.log(result1);


// 9
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

console.log(arr1.concat(arr2, arr3))


// 10
let arr4 = [-1, -2, -3, 4];

let check = arr4.some((checkZero) => checkZero > 0)

console.log(check);

// 11
let sort =[23,45,32,5,87,7,3,98]

sort.sort((a, b) => b - a)
sort.pop()

console.log(sort);

// 12
// function getinfo() {
//     let nameuser = 'anna';
//     console.log(nameuser);
//  დაწერს - anna


//     function userinfo() {
//         let info = `user name is ${nameuser}`;
//         console.log(info);
//  დაწერს - user name is anna
//     }
//     userinfo();
//     console.log(info);
//  დაწერს - undefined იმიტომ რომ ფუნქციაში შექმნილი ცვლადი ფუნქციის გარეთ არი იკითხება.
// }


// console.log(nameuser);
//  დაწერს - undefined იმიტომ რომ ფუნქციაში შექმნილი ცვლადი ფუნქციის გარეთ არი იკითხება.
// getinfo();


