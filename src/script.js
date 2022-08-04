function verificaridade() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'meninocriança.jpg')
            } else if (idade < 20) {
                //adolecente
                img.setAttribute('src', 'adolecente.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'meninacriaça.jpg')
            } else if (idade < 20) {
                //adolecente
                img.setAttribute('src', 'adolecentemenina.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos  ${genero}  com ${idade} anos `
        resultado.appendChild(img)

    }
}