

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

// grouping operator

let total = 2 + 3 * 5;
console.log(total)

// colocando os parenteses o calculo sera feito primeiro os ()
let total2 = (2 + 3) * 5;
console.log(total2)

// operadores lógicos (logical operatos)

// -2 valores booleanos, quando verificados,
//resultára em verdadeiro ou falso.

let pao = false
let queijo = true
//and (E) só será verdadeiro se as 2 condições forem verdadeiros
console.log(pao && queijo)

// or (OU) || apenas uma condição esteja verdadeira, sempre sera verdadeiro.

console.log(pao || queijo)

//NOT! //operador de negação ! troca o valor da variavel.
console.log(!pao)

// operadores de atribuição (assignment)
let x

// assignment
x = 1

// addition assignment
// x = x + 2
x +=2

//subtraction assignment
x-=1
console.log(x)

//multiplication assignment
x *=2

// division assignment
 x /= 2

 //remainder, exponetiation
 x %= 2

 x **=2

// condição então valor 1 se não valor 2
// condition ? value1 : value2

//exemplos
//café da manhã top

let pao = true
let queijo = true

const cafeTop = pao && queijo ? "Café top" : 'Café Péssimo'
console.log(cafeTop)

// outro exemplo
const cafeTop = pao || queijo ? "Café top" : 'Café Péssimo'
console.log(cafeTop)

//Outro exemplo:
const cafeTop = !pao || queijo ? "Café top" : 'Café Péssimo'
console.log(cafeTop)

/*
FALSY 
Quando um valor e considerado false em contextos onde um booleano é obrigatorio
(condicionais e loops)
*/

/*  False
    0    
    -0
    ""
    null
    undefined
    NaN
    */

//ex:
console.log( 0 ? 'verdadeiro' : 'falso')    

/*
    Truthy
    Quando um valor é considerado true em contextos onde um
    booleano é obrigatorio (condicionas e loops)

    True
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/
//ex:
console.log( 'false' ? 'verdadeiro' : 'falso')   