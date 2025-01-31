// Задание 1 -mySlice(arr, [start], [end]) - 
// делает то же самое, что и arr.slice([start], [end]) только без использования само собой внутри себя arr.slice
/*
let arr =[7, 9, 10, 56, 4, 34, 2, 18,0];
let newArr=[];
function mySlice(arr, start, end) {
 if ((start<0) && (end==null))  {
    for (index=arr.length+start; index<arr.length; index++) {
        newArr.push(arr[index]);
     }
 } else if ((start>0) && (end==null))  {
    for (index=start; index<arr.length; index++) {
        newArr.push(arr[index]);
     }
 }  else if ((start<0) && (end<0)) {
    for (index=arr.length+start; index<arr.length+end; index++) {
        newArr.push(arr[index]);
             }
 } else if ((start>=0) && (end<0)) {
    for (index=start; index<arr.length+end; index++) {
        newArr.push(arr[index]);
             }
 } else if ((start==null) && (end==null)) {
  for (index=0; index<arr.length; index++) {
        newArr.push(arr[index]);
             }
  } else {
 for (index=start; index<end; index++) {
    newArr.push(arr[index]);
 }
}
 return newArr;

}

console.log(mySlice(arr,-3,-1));
console.log(arr.slice(-3,-1));
*/


/*
// Задание 2 - myIndexOf(arr, item, from)

let arr = [8, 5, 16, 3, 17, 3, -4, 0, 2];

function myIndexOf(arr, item, from) {
 if (from==null) {
 for (i=0; i<arr.length; i++) {
    
    if (arr[i] == item) {
        return i;
    } 
 }
 return '-1';
} else {
    for (i=from; i<arr.length; i++) {
        
        if (arr[i] == item) {
            return i;
        } 
     }
     return '-1';
}
}
console.log(arr.indexOf(3));
console.log(myIndexOf(arr, 3));
*/
//Задание 3 - myIncludes(arr, item, from)
let arr = [8, 5, 16, 3, 17, 3, -4, 0, 2];

function myIncludes(arr, item, from) {
    if (from==null) {
        for (i=0; i<arr.length; i++) {
               
            if (arr[i] == item) {
                return true;
            } 
         }
         return false;
   
       } else {
           for (i=from; i<arr.length; i++) {
               
               if (arr[i] == item) {
                   return true;
               } 
            }
            return false;
       }
}
console.log(arr.includes(3,4));
console.log(myIncludes(arr, 3,4));




