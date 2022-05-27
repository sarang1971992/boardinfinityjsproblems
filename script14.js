function leftRotate(arra,le,ke){
    let mod = ke % le;
    for(let i = 0; i < le; i++){
      console.log(arra[(mod + i) % le] + " ");
      console.log("\n");
    }
      
    }
    let arr = [1,2,3,4,5,6,7];
    let t = arr.length;
    let k = 3;
    console.log("the array as mentioned");
    leftRotate(arr, t, k);