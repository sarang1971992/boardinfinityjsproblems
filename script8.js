function findLength(value){
    let getlength;
    if(value < 0){
      getlength = "Negative Number"
      
    }else if(value == 0){
      getlength = "Number is Zero";
      
    }else{
      
     let removespace = value.trim();
         getlength = removespace.length;
     
  }
     return getlength;

 }

 let result = findLength("0");
 console.log(result);