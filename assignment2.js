
const input = [1,2,5,7,10]


const findInt = (arr,target) => {

    for(let i=0;i<arr.length;i++){
        const num = arr.indexOf(target - arr[i]);
        if( num !== -1 ) {
            return [i,num];
        }

    }

}

const indices = findInt(input,9);

const ans = indices.map((index) => {
    return input[index];
})

console.log(ans);