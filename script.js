const musicaHtml = document.getElementById('musica');
const musicaFundo = document.getElementById('bg-audio')
// const listaMusicas = ["01. Painting.mp3", "02. Opening Breath (Launch Edition).mp3"]
// listaMusicas.forEach(musica =>{
//     if(musica === musicaHtml){
        
//     }
// })
var buttonJs
function tocarMusica(musica, button) {
    // if(musicaHtml != musica){
        
    // }
    button.style.backgroundColor = "black"
    musicaHtml.src = musica
    musicaHtml.play();
    buttonJs=button
}

function pausarMusica(musica) {
    musicaHtml.src = musica
    buttonJs.style.backgroundColor = "#4CAF50"
    musicaHtml.pause();
}
function usarFundo(musica){
    musicaFundo.src = musica
}