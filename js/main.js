function buscarJuego() {
    let game = document.getElementById('buscador').value
    game=game.toLowerCase()
    let x = document.getElementsByClassName('game_content')
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(game)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}