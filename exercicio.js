//1

let weight

//2

console.log(typeof weight)

//3 declare uma variavel e atribua valores para cada um dos dados

let name = "Alex"
let age = 36
let stars = 72.7
isSubscribed = false

//4 A variavel student abaixo é que tipo de dados?

let student = {};
console.log(typeof student);

//4.1 object
let student = {
    name: "Alex",
    age: 36,
    weight: 75.5,
    isSubscribed: true,
}

// 4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} KG`)

//5 Declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, 
//ou seja, somente o array vazio

let students = [];

//6 reatriua valor para a variavel acima, colocando dentro dela o objeto student da 
// questão 4. (não copiar e colocar o objet, mas usar objeto criado e inserir ele no array)

students = [student]
console.log(students)

//7 coloque no console o valor da posição zero do array acima.
console.log(students[0])

//8 crie um novo student e coloque na posição 1 do array students

let other = {
    name: "Ana",
    age: 40,
    weight:56.1,
    isSubscribed:false
}

students = [student, other];
//or
students [1] = other

console.log(students[1]);

// 

console.log(a)
var a = 1;