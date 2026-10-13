// JavaScript-এ Condition (শর্ত) ব্যবহার করা হয় কোনো শর্ত সত্য (true) নাকি মিথ্যা (false) তা যাচাই করে সিদ্ধান্ত নেওয়ার জন্য।

// 1. if Condition শর্ত সত্য হলে কোড চলবে।

let age = 20;

if (age >= 18) {
  console.log("You can vote");
}

// 2. if...else শর্ত সত্য হলে if চলবে, মিথ্যা হলে else চলবে।

let mark = 25;

if (mark >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}


// 3. if...else if...else একাধিক শর্ত যাচাই করতে ব্যবহার করা হয়।

let marks = 75;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}