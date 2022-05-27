//find the nth term of the series
function nthTerm(n){
    nthnumber = 0;
    if(n < 0){
      console.log("Negative Number")
      
    }else if(n == 0){
      console.log("Number is Zero");
      
    }else{
      for(let i = 0; i<=n; i++){
          nthnumber = i * i;         
          console.log(nthnumber);
        }
      
      //nthnumber = n * n; 
      //console.log(nthnumber);
    }
  }
  
  nthTerm(18)