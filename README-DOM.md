# JavaScript DOM :

## 1. DOM কী?
DOM = Document Object Model।

JavaScript দিয়ে HTML-এর লেখা, CSS ও element পরিবর্তন করাকে DOM manipulation বলে।

```javascript
document.title = "My Website";
```

## 2. Element Select করা

```javascript
document.getElementById("title");
document.querySelector(".box");
document.querySelectorAll("p");
```

- `getElementById()` → ID দিয়ে খোঁজে।
- `querySelector()` → প্রথম matching element দেয়।
- `querySelectorAll()` → সব matching element দেয়।

## 3. Text পরিবর্তন

```javascript
const title = document.querySelector("h1");

title.textContent = "Hello World";
```

`textContent` দিয়ে element-এর লেখা পরিবর্তন করা যায়।

## 4. CSS পরিবর্তন

```javascript
const title = document.querySelector("h1");

title.style.color = "red";
title.style.fontSize = "30px";
```

## 5. Class পরিবর্তন

```javascript
const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("active");
box.classList.toggle("active");
```

- `add()` → class যোগ করে।
- `remove()` → class সরায়।
- `toggle()` → class যোগ বা সরায়।

## 6. Button Click Event

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alert("Button Clicked!");
});
```

`addEventListener()` দিয়ে event handle করা হয়।

## 7. নতুন Element তৈরি

```javascript
const p = document.createElement("p");

p.textContent = "Hello";

document.body.append(p);
```

- `createElement()` → নতুন element তৈরি করে।
- `append()` → element যোগ করে।

## 8. Element Delete

```javascript
const box = document.querySelector(".box");

box.remove();
```

`remove()` দিয়ে element মুছে ফেলা যায়।

## 9. Input থেকে Value নেওয়া

```javascript
const input = document.querySelector("input");

console.log(input.value);
```

`value` দিয়ে input-এর লেখা পাওয়া যায়।

## 10. NodeList vs HTMLCollection

| NodeList | HTMLCollection |
|---|---|
| বিভিন্ন ধরনের node রাখতে পারে | শুধু HTML element রাখে |
| Live বা Static হতে পারে | সাধারণত Live |
| `querySelectorAll()` | `getElementsByClassName()` |

**মনে রাখবে:** `querySelectorAll()` static NodeList দেয়, আর `getElementsByClassName()` live HTMLCollection দেয়।

## 11. DOM Practice

- [ ] Button click করলে text পরিবর্তন।
- [ ] Text-এর color পরিবর্তন।
- [ ] Dark Mode তৈরি।
- [ ] To-Do List তৈরি।
- [ ] Input থেকে নাম নিয়ে দেখানো।


