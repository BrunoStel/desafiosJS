// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {

    //  \s  => //whitespace    _  => _      (?=[A-Z])  => Se s string que vem logo após é uma letra Maísucula. Sendo | => ou
    
    const regExp = /_|\s|(?=[A-Z])/
    
      return str
        .split(regExp) //Converte a string em um array, utilizando como separador o argumento passado que é uma expressao regular
        .join("-") //Juntando o array separando os índices por -, passado como argumento de join
        .toLowerCase() //Transforma toda a String em caixa baixa
    
    }
    
    console.log(spinalCase('The Andy_Griffith_Show'));