// JavaScript-এ Loop ব্যবহার করা হয় একই কাজ বারবার করার জন্য। 🔁 ( যেমন, তুমি যদি ১ থেকে ৫ পর্যন্ত সংখ্যা print করতে চাও, তাহলে পাঁচবার console.log() না লিখে একটি loop ব্যবহার করতে পারো )


// 1. for Loop এটি সবচেয়ে পরিচিত loop। কতবার কাজটি করতে হবে, তা জানা থাকলে এটি ব্যবহার করতে পারো।
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Output:
1
2
3
4
5


// 2. while Loop যতক্ষণ condition সত্য থাকবে, ততক্ষণ loop চলবে।
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

Output:
1
2
3
4
5
//  while loop-এর মধ্যে i++ দিতে ভুলে গেলে loop অনির্দিষ্টকাল চলতে পারে। একে infinite loop বলে।


// 3. for...of Loop Array-এর প্রতিটি item নিয়ে কাজ করার জন্য এটি খুব সহজ।
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
  console.log(fruit);
}

Output:
Apple
Mango
Banana
// এখানে fruit variable-এ প্রতিবার Array-এর একটি করে item আসে।


// 4. for...in Loop Object-এর property বা key-এর নাম পাওয়ার জন্য এটি ব্যবহার করা হয়।
let student = {
  name: "Robiul",
  age: 22,
  city: "Rangpur"
};

for (let key in student) {
  console.log(key, student[key]);
}

Output:
name, Robiul
age, 22
city, Rangpur
// student[key] দিয়ে প্রতিটি key-এর value পাওয়া যায়।


// 6. Array-এর forEach() Method Array-এর প্রতিটি item-এর ওপর কাজ করার আরেকটি উপায়।
let numbers = [10, 20, 30];

numbers.forEach((num) => {
  console.log(num);
});

Output:
10
20
30
// React-এ Array-এর data নিয়ে কাজ করার সময় map()-ও খুব গুরুত্বপূর্ণ।