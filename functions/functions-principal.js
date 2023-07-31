

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

//Manipulando Arrays

//Criar array com construtor

let myArray = new Array('a','b','c')
console.log(myArray)

//Manipulando Arrays
//contar elementos de um array
console.log(['a','b','c'].length)

/*
    Manipulando Arrays

    Transformar uma cadeia de caracteres em elementos de um array

*/
let word = 'manipulação'
console.log(Array.from(word))

/*
    Manipulando Arrays

*/

let techs = ['html', 'css','js']

// Adicionar um item no fim
techs.push('nodejs')

//adicionar no começo
techs.unshift('sql')

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array, slice trabalha com 2 parametros
//1 parametro é para tirar e o segundo para iniciar.

console.log(techs.slice(1, 3))

//remover 1 ou mais items em qualquer posição do array
techs.splice(1,2)

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)


/*Expressoes e Operadores 

    -Expressions
    -Operators
        binary
        unary
        ternary

*/
//expressions pode ou não terminar ;.
let number = 1;

//operators binary
console.log(number + 1);

//operators unary
console.log(++number)

//operators ternary
console.log( false ? 'alo' : 'nada')

/*
    new
    * left-hand-side expression
    *criar um novo objeto

*/
let name = new String('alex')
let age = new Number(23)
name.sobreNome = 'Fernandes'

console.log(name, age)

/*

    Operadores unários
    typeof
    delete

*/

const person = {
    name:'Alex',
    age: 25,
}
delete person.age
console.log(person)

/*
    Operadores Aritiméticos

*/

//multiplicação
console.log(3.2 * 5.5)

//divisão
console.log(12 / 2)

//soma +
console.log(10 + 2)

//subtração
console.log(12 - 6)

//resto da divisão
let remainder
remainder = 11 % 10
console.log(remainder)

//incremento
let increment
increment = 10
console.log(increment++)

//obs: tem diferenca em icrementar antes e depois ex:
console.log(++increment)

//decremento
let decrement
decrement = 10
decrement--
console.log(decrement)

//exponencial 3 elevado a 3
console.log(3 ** 3)
