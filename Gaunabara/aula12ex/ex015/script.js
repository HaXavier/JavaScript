function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = 'Manha.png'
        document.body.style.background = '#fdcb6e'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'Tarde.png'
        document.body.style.background = '#e67e22'
    } else {
        //BOA NOITE
        img.src = 'Noite.png'
        document.body.style.background = '#192a56'
    }

}




