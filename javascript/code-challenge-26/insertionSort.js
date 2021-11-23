'use strict';

function insertionSort(arr) {
  for(let i=1; i<= arr.length; i++){
    let j = i-1;
    let temp = arr[i];

    while(j>= 0 && temp <arr[j]){
      arr[j+1] = arr[j];
      j = j-1;
      arr[j+1] = temp;
    }
  }
  return console.log(arr);
}

exports = {
  insertionSort
};

// let arr1 = [8,4,23,42,16,15];
// let arr2 = [20,18,12,8,5,-2];
// let arr3 = [5,12,7,5,5,7];
// let arr4 = [2,3,5,7,13,11];
// insertionSort(arr1);
// insertionSort(arr2);
// insertionSort(arr3);
// insertionSort(arr4);
