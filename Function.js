function numbers(num1, num2, num3, num4){
    const sum = num1 + num2 + num3 + num4 ;
    const mul = num1 * num2 * num3 * num4 ;
    return sum;
}

const result1=numbers(5,10,15,20)
console.log(result1)

function data(num){
    if(num % 2 ===1){
        const mul=num *2;
        return  mul;
    }
    else{
        const dev=num / 2;
        return dev; 
    }
}

const result2=data(6);
console.log(result2)

function avg(array){
   
   let sum=0;
   
    for(const arr of array){
        sum =sum + arr;
        
    }
    const result= sum / array.length;
    return result; 
}

const numberArr=[10,20,30,40];

console.log( avg(numberArr) )