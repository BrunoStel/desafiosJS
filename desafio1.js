// Somar todos os números em um intervaloAprovado
// Vamos passar um array de dois números. Retorne a soma desses dois números mais a 
// soma de todos os números entre eles. O menor número nem sempre chegará primeiro.

// Por exemplo, sumAll([4,1]) deve retornar 10 porque a soma de todos os números entre 1 e 4 (ambos incluídos) é 10.

function diffArray(arr1, arr2) {
    var newArr = [];
  
        arr1.forEach(val=>{
            if

(arr2.indexOf(val) == -1 && newArr.indexOf(val) == -1 ){
              newArr.push(val)
            }
        })


    
        arr2.forEach(val=>{
            if(arr1.indexOf(val) == -1 && newArr.indexOf(val) == -1 ){
      

    newArr.push(val)
            }
        })
    
  
    return newArr;
  }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
