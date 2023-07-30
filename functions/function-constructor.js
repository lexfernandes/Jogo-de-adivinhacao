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
