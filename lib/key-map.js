document.addEventListener('keydown',(event)=> {
    switch (event.key) {
        case 'ArrowUp' : 
            animations.character.deriction === 'back' ? animations.character.moveUp() : animations.character.turnUp();
            break;
        case 'ArrowDown' :
            animations.character.deriction === 'front' ? animations.character.moveDown() : animations.character.turnDown();
            break;
        case 'ArrowLeft' :
            animations.character.deriction === 'left' ? animations.character.moveLeft() : animations.character.turnLeft();
            break;
        case 'ArrowRight' :
            animations.character.deriction === 'right' ? animations.character.moveRight() : animations.character.turnRight();
            break;
    }
});