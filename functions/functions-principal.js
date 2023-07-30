

//####################################################################

//arrow function

const sayMyName = () => {
    console.log('Alex')
}

sayMyName()


//or passando os parâmetros

const sayMyName = (name) =>{
    return name
}

sayMyName('Alex')
//#######################################################################

// Manipulando Strings e Números

//Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula

let number = 132131.321321
// ao converter number.tofixed(2) se trasforma em string.
console.log(number.toFixed(2).replace('.', ','))

//########################################################################

/*
    Manipulando String e Números

    Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

*/
//string
let word = 'paralelepipedo'
console.log(word.length)

//number, tem que converter number para string.

let planet = 321
console.log(String(planet).length)

//########################################################################

//manipulando Strings e Números

// Transformar String em números e número em String

let string = '123'

console.log(Number(string))


let number = 321
console.log(String(number))
//########################################################################

/*
    Function () constructor

    *expressão new
    *criar um novo objeto
    *this keyword

*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " andando "
    }
}
const alex = new Person('Alex')
const ana = new Person('Ana')

console.log(alex.walk())
console.log(ana.walk())

//########################################################################

/*Prototype

    *prototype-base languade
    * prototype chain
    * __proto__

*/
// string 
"Alex".

// number
12.0.

12.0.

//########################################################################

//callback function, uma função colocando outra função dentro dela mesma.

function sayName (name){
    return name()
 }
 
 
 sayName(
     //arrow function
     () => {
         console.log('Estou em uma callback')
     }
 )
 //########################################################################

/*

    Type conversion (typecasting) vs type coersion
    * Alteração de um tipo de dado para outro tipo

*/
// type coersion javascript automaticamente converte 5 em string
console.log('9' + 5)

//type conversion quando nós explicitamente convertemos sting em número usando function

console.log(Number('9') + 5)

//#################################################################

//verificar se o texto contém a plavra Amor.

let frase ='Eu quero viver o amor!'
console.log(frase.includes('amor'))

