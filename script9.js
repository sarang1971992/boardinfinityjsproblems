//quadratic equation  X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

function quadraticequation(a,b,c){
    let root = Math.sqrt(b*b - 4*a*c);
    let denominator = 2*a;
  
    let root1 = (-b + root)/denominator;
    let root2 = (-b - root)/denominator;
  
    console.log(root1)
    console.log(root2)
  }
  
   quadraticequation(1,5,6)