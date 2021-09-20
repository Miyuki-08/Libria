function favorite() {
    const favorite = document.getElementById('favorite');
    const heart = document.createTextNode('favorite');
    const heart_line = document.createTextNode('favorite_border');
    let favoritado = favorite.innerText == 'favorite';

    if (favoritado) {
        favorite.innerText = ' ';
        favorite.appendChild(heart_line);
    }else{
        favorite.innerText = ' ';
        favorite.appendChild(heart);
        
    }

}