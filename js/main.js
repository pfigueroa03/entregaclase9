function buscarJuego() {
    let game = document.getElementById('buscador').value
    game=game.toLowerCase()
    let x = document.getElementsByClassName('game_content')
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(game)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}

function filtroSony() {
    
    let games = document.getElementsByClassName('game_content')
    const isChecked = event.target.checked

    if(isChecked) {
        for (let i = 0; i < games.length; i++) {
            if (games[i].className.includes('onlyplay')) {
                games[i].style.display = ''
            } else {
                games[i].style.display = 'none'
            }
        } 
    }else {
        for(let i = 0; i < games.length; i++) {
            games[i].style.display = ''
        }
    }
}

function filtroXbox() {
    
    let games = document.getElementsByClassName('game_content')
    const isChecked = event.target.checked

    if(isChecked) {
        for (let i = 0; i < games.length; i++) {
            if (games[i].className.includes('onlyxbox')) {
                games[i].style.display = ''
            } else {
                games[i].style.display = 'none'
            }
        } 
    }else {
        for(let i = 0; i < games.length; i++) {
            games[i].style.display = ''
        }
    }
}


