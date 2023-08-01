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