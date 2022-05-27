function sortByFrequency(arr,q){

    let maxe = -1;
    for(let i = 0; i<q; i++){
      maxe = Math.max(maxe,arr[i]);
      
    }
  
    var freq = new Array(maxe + 1).fill(0);
    for(let i = 0; i < q; i++){
      freq[arr[i]]++;
      
    }
  
    var cnt = 0;
    for(let i = 0;i<=maxe; i++){
      if(freq[i] > 0){
        let value = 100000 - i;
        arr[cnt] = 10000 * freq[i] + value;
        cnt++;
      }
    }
    return cnt;
  }
  
  function printsortedArray(arr,cnt){
    for(let i = 0; i < cnt; i++){
      let value = 10000 - (arr[i] / 100000);
      for(let j = 0;j < frequency; j++){
        console.log(value + " ");
      }
    }
  }
  
  var arr = [3,3,4,4,7,8];
  var q = arr.length;
  var cnt = sortByFrequency(arr,q);
  arr.sort(a,b => b-a);
  printsortedArray(arr,cnt);