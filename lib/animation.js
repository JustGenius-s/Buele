const
    animations = {};
function initAnimations () {
    let character = {
        x: 0,
        b_x: 0,
        y: 0,
        b_y: 0,
        src: '../share/sprites-2.0.0/sprites/character/hero/hero-man-walk.png',
        deriction: 'front',
        b_deriction: '',
        block_size: 2,
        animation_frame: 3,
        turnUp: ()=> {this.deriction = 'back'},
        trunDown: ()=> {this.deriction = 'front'},
        turnLfet: ()=> {this.deriction = 'left'},
        turnRight: ()=> {this.deriction = 'right'},
        moveUp: ()=> {this.y -= y < 16 ? 0 : 16},
        moveDown: ()=> {this.y += y > 1080 ? 0 : 16},
        moveLeft: ()=> {this.x -= x < 16 ? 0 : 16},
        moveRight: ()=> {this.x += x > 1920 ? 0 : 16},
        update: ()=> {
            b_x = x;
            b_y = y;
            b_deriction = this.deriction;
        },
        needUpdate: ()=> b_x === x && b_y === y && b_deriction === this.deriction
    }
    animations.character = character;

}
function drawAnimation (gl) {
    if (images[0].src === animations.character.src) {
        let p_sprite = animations.deriction === 'back' ? 'row-1' :
                       animations.deriction === 'front' ? 'row-2' :
                       animations.deriction === 'left' ? 'row-3' :
                       animations.deriction === 'right' ? 'row-4';
        gl.drawImage()
    }
}
