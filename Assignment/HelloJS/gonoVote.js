// Problem-04: Upcoming Gono Vote
// আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ (Majority) কি না।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) অথবা equal (string) রিটার্ন করবে।



function gonoVote(array) {
   const checkArray=Array.isArray(array);

   if(checkArray){
     const haVote=[];
     const naVote=[];

        for(const arr of array){
            if(arr === 'ha'){
            haVote.push('ha')
            }
            else if(arr === 'na'){
            naVote.push('na')
            }
            else{
                console.log('invalid')
            }
        }

     const countHa=haVote.length;
     const countNa=naVote.length;

        if(countHa > countNa){
            return true;
        }
        else if(countHa === countNa){
            return 'equal';
        }
        else{
            return false;
         }
     

   }
   else{
    return('Invalid')
   }

}


const votes=['ha', 'na', 'na', 'ha','ha', 'ha', 'na', 'ha', 'na', 'ha', 'na'];

const result=gonoVote(votes)
console.log(result)