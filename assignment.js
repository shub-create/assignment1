const string1 = "HELLOWORLD";
const string2 = "HELPUS";


const longestCommon = (string1,string2) => {
       
      const arr = Array(string2.length + 1).fill(null).map(() => {
        return Array(string1.length + 1).fill(null);
      })

      
      for(let i = 0;i<=string2.length;i++){
        arr[i][0] = 0;
      }

      for (let j = 0;j<=string1.length;j++){
        arr[0][j] = 0;
      }

      let s = 0;

      let row = 0;
      let col = 0;
      
      for(let i= 1;i<=string2.length;i++){
        for(let j = 1;j<= string1.length;j++){
            if(string1[j-1] === string2[i-1]){
                arr[i][j] = arr[i-1][j-1] + 1;
            }
            else{
                arr[i][j] = 0;
            }
            if(arr[i][j] > s){
                s = arr[i][j];
                col = j;
                row = i;
            }
        }
      }

      if (s===0){
        return '';
      }

      let ans = '';

      while(arr[row][col] > 0){
        ans = string1[col-1] + ans;
        row -= 1;
        col -= 1;
      }

      return ans;

}

console.log(longestCommon(string1,string2));