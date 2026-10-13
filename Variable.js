// 1. Variable কী?
// Variable হলো ডেটা রাখার একটি container (পাত্র)।

let name = "Robiul";
let age = 22;

console.log(name);
console.log(age);


// 2. var, let, const এর পার্থক্য ?



// var পুরোনো পদ্ধতি
// একই নামে আবার declare করা যায়। তাই বড় প্রজেক্টে ব্যবহার করলে সমস্যা হতে পারে।

var x = 10;
var x = 20;
console.log(x); // 20




// let যে ভেরিয়েবলের মান পরিবর্তন হবে

let Age = 20;
Age = 22;
console.log(Age); // 22


// const যে ভেরিয়েবলের পুনরায় assignment হবে না

const country = "Bangladesh";
console.log(country);