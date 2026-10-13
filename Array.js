// JavaScript-এ Array হলো একটি variable-এর মধ্যে একাধিক data রাখার পদ্ধতি। চলো সহজভাবে শিখি। 😊

// 1. Array কী? ধরো, তোমার ৩ জন বন্ধুর নাম রাখতে হবে।

// Array ছাড়া:

let friend1 = "Robi";
let friend2 = "Rahim";
let friend3 = "Karim";

// Array দিয়ে:

let friends = ["Robi", "Rahim", "Karim"];

console.log(friends);


// 2. Array থেকে Data বের করা (Index) JavaScript-এ Array-এর index শুরু হয় 0 থেকে।

console.log(friends[0]); // Robi
console.log(friends[1]); // Rahim
console.log(friends[2]); // Karim


// 3. Array-এর গুরুত্বপূর্ণ Properties ও Methods Method মানে হলো নির্দিষ্ট কাজ করার জন্য তৈরি function।
// length — মোট উপাদান সংখ্যা

let numbers = [10, 20, 30];
console.log(numbers.length); // 3

// push() — শেষে নতুন data যোগ করে

let fruits = ["Apple", "Mango"];
fruits.push("Banana");
console.log(fruits); // ["Apple", "Mango", "Banana"]

// pop() — শেষের data সরিয়ে দেয়

let nums1 = [10, 20, 30];
nums1.pop();
console.log(nums1); // [10, 20]

// unshift() — শুরুতে data যোগ করে

let nums2 = [20, 30];
nums2.unshift(10);
console.log(nums2); // [10, 20, 30]

// shift() — প্রথম data সরিয়ে দেয়

let nums3 = [10, 20, 30];
nums3.shift();
console.log(nums3); // [20, 30]