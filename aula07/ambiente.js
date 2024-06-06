console.log("Tudo Bem?") /*Maneira burra de repetir uma função*/ 
console.log("Tudo Bem?")
console.log("Tudo Bem?")
console.log("Tudo Bem?")

var c = 1               /*Maneira eficiênte 1*/
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}

var c = 1               /*Maneira eficiênte 2*/
do{    
        console.log(`Passo ${c}`)
        c++
} while (c <= 6) 