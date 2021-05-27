const
    images = preloadImage('../share/sprites-2.0.0/sprites/character/hero/hero-man-walk.png');


function preloadImage () {
    let images = [];
    for (i=0; i<preloadImage.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preloadImage.arguments[i];
    }
    return images;
}
images[0].onload = function () {
    graphics_2d.drawImage(images[0],0,0);
};