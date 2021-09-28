// Seek and DestroyPassed
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more 
// arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.


function destroyer(arr, ...args) {
    const arr2 = args
  
    arr2.forEach(val=>{
        while(arr.indexOf(val) >= 0){
            let index = arr.findIndex(item => item == val)
             arr.splice(index, 1)
        } 
    })
  
    return arr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 1,3));
