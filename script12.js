function palindrome(str){
    let len = str.length;
    let mid = Math.floor(len/2);
    for(let i = 0; i < mid; i++){
      if(str[i] !== str[len -1 - 1]){
        return false;
      }
    }
    return str;
  }
  console.log(palindrome("5"));