// separe um texto que contem espaços, em um novo array onde
//cada texto é uma posição do array. Depois disso, transforme o array
// em um texto onde eram espaços, coloque _

let frases ='Eu quero viver o amor'

let meuArray = frases.split(' ')
console.log(meuArray)

let minhaFraseComUnderscore = meuArray.join('_')
console.log(minhaFraseComUnderscore.toLocaleUpperCase())


function toUpperCase(text) {
    return text.toUpperCase();
  }


    const text = "O amor da minha vida";
    const upperCaseText = toUpperCase(text);
    console.log(upperCaseText);