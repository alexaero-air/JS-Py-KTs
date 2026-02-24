// Задача 1 
let word = 'Арнольд';
let tot = '';
for (let i = 0; i < word.length; i++){
    let ch = word[i];
    if (ch != 'А' && ch != 'о'){
    tot += ch;
    }
}
console.log(tot);

// Задача 2
let num = 20;
for (let i = 1; i <= num; i++){
  if (i % 3 == 0){
     console.log(i);
  }
}

// Задача 3
let num2 = 5;
let res = '';
for (let i = 1; i <= num2; i++){
    res += i;
    console.log(res);
}

// Задача 4
let num3 = 4 
let fact = 1;
let sum = 0;
for (let i = 1; i <= num3; i++){
    sum += (fact = fact * i);
}
console.log(sum);

// Задача 5
let wordp = 'потоп';
let wordarr = wordp.split('');
let revarr = wordarr.toReversed();
let iseq = true;

for (let i = 0; i < wordarr.length; i++){
    if (wordarr[i] != revarr[i]){
        iseq = false;
    }  
}

if (iseq == true){
    console.log('YES');
}
else{
    console.log('NO');

}
