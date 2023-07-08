# Learning Log

### 8-7-23


# Data structures and algorithms revision

Problem: Given an array, find and return two indicies of the array that add up to weight or return -1 if there
is no combination found that adds up to weight.



```
let arr = [1,2,3,4,5];


function findSum(arr, weight) {
    for (var i=0, arrLength=arr.length; i<arrLength; i++) {
        for (var j=i+1; j<arrLength; j++) {
            if (arr[i]+arr[j] == weight) {
                return [i,j];
            }
        }
    }
    return -1;
}

console.log(findSum(arr, 9));

```
