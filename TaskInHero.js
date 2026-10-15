
// ProgrammingHero1 Loop related tasks :

const Commitment= 'I will invest at least 6 hrs every single day for next 60 days!';
for(let T=1; T <= 60; T++){
    // console.log(Commitment, T)

}

// Odd Number 
for(let n=61; n<=100; n++){
    if(n % 2===1){
        console.log('Odd Number', n)
    }
}

// Even Number 
for(let n=78; n<=98; n++){
    if(n % 2===0){
        console.log('Even Number', n)
    }
}


// Sum All Number in 1 to 100 
let sum =0;
for(let n=1; n<=100; n++){
    sum=sum+n;
    console.log("Sum in 1 to 100", sum)
}


let sum2= 0;
for(let n=1; n<=100; n++){
    if(n % 2 !==0){
        sum2=sum2+n;
        console.log("Sum odd number in 1 to 100", sum2);
    }
}
console.log(sum2)


// array-looping-tasks


// Task 1 : Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const col_reverces= colors.reverse()
console.log(col_reverces)

// Task 2 : Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNum=[];

for(let num of numbers){
    if(num % 2 ===0){
        newNum.push(num)
    }
}
console.log(newNum)

// Task 3 : Use a for...of loop to concatenate all the elements of an array into a single string.

const  words = ['Tom', 'Tim', 'Tin', 'Tik'];
let result ='';

for(let word of words){
    result =result+word;
}
console.log(result)

// Task 4 : (Hard) Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
const word =statement.split(' ');
const revWord=word.reverse();
const result2=revWord.join(' ')

console.log(result2)

