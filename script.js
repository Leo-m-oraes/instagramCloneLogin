const imagem = document.getElementById("img")


function changeImg() {
    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    }
    else {
        imagem.style.opacity = 0
    }

}
setInterval(() => {

    changeImg()

}, 4000);




