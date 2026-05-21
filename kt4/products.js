// let products = [
//     { id: 1, title: 'велосипед', price: 45000, count: 3, marks: [5,4,3,2,1] },
//     { id: 2, title: 'самокат', price: 15000, count: 12, marks: [5,5,4,5] },
//     { id: 3, title: 'ролики', price: 850, count: 5, marks: [3,3,4] },
// ]

// task1 = products.filter(prods => prods.count > 10);
// console.log(task1);

// task2 = products.find(prods => prods.price >= 800 && prods.price <= 900);
// console.log(task2);

// task3 = products.sort((a, b) => b.price - a.price);
// console.log(task3);

// task4 = products.reduce((sum, prod) => sum + prod.price * prod.count, 0);
// console.log(task4);

// productsWithMarks = products.map(product => {
//     marks_total = 0;
//     product.marks.forEach(mark => marks_total += mark);
//     newProduct = {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         count: product.count,
//         marks: product.marks,
//         marks_total: marks_total
//     };
//     return newProduct;
// })
// console.log(productsWithMarks);
