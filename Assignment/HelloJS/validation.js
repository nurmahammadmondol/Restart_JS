// Problem-02: OTP Validation for Zapshift
// Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ  হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে। 
// ফাংশনটি একটি Boolean (true/false) রিটার্ন করবে। যদি ইনপুটটি সঠিক ফরম্যাটে না থাকে তবে Invalid  রিটার্ন করবে। 

function validOtp(otp) {
   
   if(typeof otp=== 'string'){
      
      if(otp.length ===8 && otp.startsWith('ph')){

         return true;
      }
       else{
         return('invalid pass')
      }

   }
   else{
     return('invalid pass')
   }
}



const result = validOtp('ph-1345')
console.log(result)

