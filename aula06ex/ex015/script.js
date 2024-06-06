function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 4 && idade < 10) {
                //Criança
                img.setAttribute("src", "fotocriança-m.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "fotojovem-m.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "fotohomem-m.png")
            } else {
                //Idoso
                img.setAttribute("src", "fotoidoso-m.png")
            }
        
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 4 && idade < 10) {
                //Criança
                img.setAttribute("src", "fotocriança-f.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "fotojovem-f.png")
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "fotomulher-f.png")
            } else {
                //Idoso
                img.setAttribute("src", "fotoidosa-f.png")
            }
        }
    
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}