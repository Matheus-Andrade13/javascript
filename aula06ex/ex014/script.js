function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`

    if (hora >= 5 && hora < 12){
        //BOM DIA!
        img.src = "manhã.png"
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = "tarde.png"
    } else {
        //BOA NOITE!
        img.src = "noite.png"
    }
}