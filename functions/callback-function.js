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