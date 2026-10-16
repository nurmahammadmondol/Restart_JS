// Problem-03: BCS Final Score Calculator
// BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Object নেবে এবং নিচের শর্ত ও নিয়ম অনুযায়ী ফলাফল প্রদান করবে।


function finalScore (omr) {
    const rightMcq= omr?.right;
    const wrongMcq= omr?.wrong;
    const skipMcq= omr?.skip;
    const allMcq=rightMcq + wrongMcq + skipMcq;
   

    if(allMcq === 100){
       const rightMark= rightMcq * 1;
       const wrongMark= wrongMcq * 0.5;
       const finalMarks=rightMark - wrongMark;
       console.log(finalMarks)

    }
    else{
        console.log('invalid')
    }

}


const marks=  { 
    right: 50, 
    wrong: 25, 
    skip: 25
}

const result=finalScore(marks)

