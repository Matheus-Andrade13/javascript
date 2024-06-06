var num = [9, 3, 2, 10, 6]

num.push(1)
num.sort() 
console.log(num)
console.log(`O comprimento do vetor é de ${num.length}`)
console.log(`Nosso vetor é o ${num[0]}`)

var pos = num.indexOf(3)
if (pos == -1){
    console.log("Nada encontrado")
} else {
    console.log(`O valor está na posição ${pos}`)
}
