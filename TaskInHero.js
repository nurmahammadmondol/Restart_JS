
// // ProgrammingHero1 Loop related tasks :

// const Commitment= 'I will invest at least 6 hrs every single day for next 60 days!';
// for(let T=1; T <= 60; T++){
//     // console.log(Commitment, T)

// }

// // Odd Number 
// for(let n=61; n<=100; n++){
//     if(n % 2===1){
//         console.log('Odd Number', n)
//     }
// }

// // Even Number 
// for(let n=78; n<=98; n++){
//     if(n % 2===0){
//         console.log('Even Number', n)
//     }
// }


// // Sum All Number in 1 to 100 
// let sum =0;
// for(let n=1; n<=100; n++){
//     sum=sum+n;
//     console.log("Sum in 1 to 100", sum)
// }


let sum2= 0;
for(let n=1; n<=100; n++){
    if(n % 2 !==0){
        sum2=sum2+n;
        console.log("Sum odd number in 1 to 100", sum2);
    }
}
console.log(sum2)