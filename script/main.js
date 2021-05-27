/**
 *
 *
 */
const
    foreground = document.querySelector('.foreground-layer'),
    graphics = document.querySelector('.graphics-layer'),
    background = document.querySelector('.background-layer'),
    swapper = document.querySelector(".swapper-layer"),
    foreground_2d = foreground.getContext('2d'),
    graphics_2d = graphics.getContext('2d'),
    background_2d = background.getContext('2d'),
    swapper_2d = swapper.getContext('2d');




function main () {
    initCanvas();
    document.body.onresize = () => {
        initCanvas();
    };
    startGame();
};
main();

function startGame () {
    let
        last_time;

    initAnimations();
    function startAnimation (current_time) {
        let det_t;
        //退出游戏，返回主菜单
        if(app.game_running === false){
            return 0;
        }
        //更新时间差，确定帧间间隔
        if (current_time&last_time) {
            det_t = current_time - last_time;
        }

        //绘制


        requestAnimationFrame(startGame);
    }
}
