// function checkElem(num){
//     if (num % 7 == 0){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }

// checkElem(14);



// let array = [1,2,3,4];
// function changeElem(array, n){
//     newarr = [];
//     for (i = 0; i <= array.length - 1; i++){
//         newarr.push(array[i] * n);
//     }
//     console.log(newarr);
// }

// changeElem(array, 3);


// function sumElems(array){
//     let total = 0
//     let newarr = array.map(Number)
//     for (let i = 0; i < newarr.length; i++) {
//         if (isNaN(newarr[i])){
//             total += 0;
//         }
//         else{
//             total += newarr[i];
//         }
//     }
//     return total;
// }

// const array = ['10','Строка','5g','15','05'];
// let result = sumElems(array);
// console.log(result);



// function reverseIndex(array){
//     revarr = [];
//     for (i = array.length - 1; i >= 0; i--){
//         revarr.push(array[i]);
//     }
//     return revarr;
// }

// let array = [1,2,3,4,5];
// console.log(reverseIndex(array));



// function checkElem(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             return true;
//         }
//     }
//     return false;
// }

// let array = [1,2,3,4];
// let result = checkElem(array, (elem) => elem == 3 );
// console.log(result);