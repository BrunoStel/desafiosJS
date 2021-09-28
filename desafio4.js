// Make a function that looks through an array of objects (first argument) and 
// returns an array of all objects that have matching name and value pairs 
// (second argument). Each name and value pair of the source object has to be 
// present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and
//  the second argument is { last: "Capulet" }, then you must return the third 
//  object from the array (the first argument), because it contains the name and its 
//  value, that was passed on as the second argument.


function whatIsInAName(collection, source) {
    var arr = [];
  
  const colecao = Object.entries(collection)
  const fonte = Object.entries(source)
   let i=0
  colecao.forEach((val, index)=>{
      i=0
    Object.entries(val[1]).forEach(v=>{
          fonte.forEach(valor=>{
            console.log(v.toString(), valor.toString())
            if(v.toString() == valor.toString()){
              i++
              console.log(i)
              if(i==fonte.length){
                 arr.push(collection[index])      
              }
            }
          })
    })
  })
  
    return arr;
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))


//Versao 2 - simplificada


  function whatIsInAName(collection, source) {
    var arr = [];
  
    var keysToCheck = Object.keys(source);
  
  
    arr = collection.filter(item =>
        keysToCheck.every(key => 
        item.hasOwnProperty(key) && item[key] === source[key]))
  
  
    return arr;
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))