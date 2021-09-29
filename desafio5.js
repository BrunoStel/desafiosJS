// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



function spinalCase(str) {

    //  \s  => //whitespace    |_|  => _      (?=[A-Z])  => Se após aquela string possui uma letra Maísucula
    
    const regExp = /\s|_|(?=[A-Z])/
    
      return str
        .split(regExp)
        .join("-")
        .toLowerCase()
    
    }
    
    console.log(spinalCase('The Andy_Griffith_Show'));