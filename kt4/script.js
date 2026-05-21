// Задание 1
// let obj = { 
//     price1: 100, 
//     price2: 150, 
//     price3: 200, 
//     price4: 100,
//     price5: 150, 
// }
// let sum = 0;
// for (prices in obj){
//   sum += obj[prices];
// }
// console.log(sum);

// Задание 2
// let array = [ 
//     {id: 1, name: 'apple'}, 
//     {id: 2, name: 'watermelon'}, 
//     {id: 3, name: 'qiwi'}, 
//     {id: 4, name: 'lemon'} 
// ]
// let vals = array.map(obj => Object.values(obj));
// console.log(vals);

// Задание 3
// function logString(...args){
//     result = args.join(" ");
//     console.log(result);
// }
// logString("Hello", "my", "world!", "awaw");

// Задание 4
// function checkObj(obj){
//     return obj.hasOwnProperty('particle');
// }
// console.log(checkObj({id: 1, particle: 10}));
// console.log(checkObj({id: 2, name: "tag"}));

// Задание 5
// function generateArray(array){
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i]) == false) {
//             array[i] = Object.values(array[i]);
//         }
//     }
//     return array;
// }
// let array = [[1], {id: 40}, [100], [300], {part: 10}];
// console.log(generateArray(array))

// Задание 6
// let users = [
//     {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
//     {id: 2, name: 'Steven', lastname: 'King', age: 34} 
// ]

// function addUser(name, lastname, age) {
//     let newId;
//     if (users.length > 0){
//         newId = users[users.length - 1].id + 1;
//     }
//     else{
//         newId = 1;
//     }
//     newUser = { id: newId, name, lastname, age };
//     users.push(newUser);
//     return newUser;
// }

// function updateUser(id, name, lastname, age) {
//     user = users.find(user => user.id == id);
//     user.name = name;
//     user.lastname = lastname;
//     user.age = age;
//     return user;
// }

// function deleteUser(id) {
//     index = users.findIndex(user => user.id == id);
//     users.splice(index, 1);
//     return true;
// }

// // addUser('Stepan', 'Andreich', 28);
// // updateUser(2, 'Anatoliy', 'Nikolaev', 35);
// // deleteUser(1)
// console.log(users);

// Задача 7
// в products.js

// Задача 8
// class Email {
//     constructor(email) {
//         this.email = email;
//     }
//     get isValid() {
//         let forbidden = ['*', '#', '$', '%', '^'];
//         let [login, domain, zone] = this.email.split(/[@.]/);
//         for (let char of forbidden) {
//             if (login.includes(char)){
//                 return false;
//             }
//         }
//         return zone.length <= 3;
//     }
//     set setEmail(arr) {
//         let [login, domain, zone] = arr;
//         this.email = `${login}@${domain}.${zone}`;
//     }
// }

// user = new Email("test@gmail.com");
// console.log(user.isValid);
// user.setEmail = ['newEmail', 'gmail', 'com'];
// console.log(user.email);