// function hoisting

sayMyName ()

function sayMyName(){
    console.log("Alex")
}

// se eu declarar a varial na function não funciona ex:

sayMyName()

let sayMyName = function(){
    console.log('Alex')
}

