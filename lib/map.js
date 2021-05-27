/**
 *
 * @param {JSON} map_data  Map Json file.
 */
const
    mapLoader = function (map_data) {

        let
            data = JSON.parse(map_data);

        data.forEach(item => {
            let image = new Image();
            let [src = "",coordinate_im="",image_size="",coordinate_cv=""] = item;
            if (src === "")
                throw "no image source!";
            image.src = src;                // 待优化，应该在绘制前向服务器一并请求资源
            image.onload = () => {
                console.log(coordinate_cv);
                graphics_2d.drawImage(image,
                    parseInt(coordinate_im.split(' ')[0])*16,   // sx
                    parseInt(coordinate_im.split(' ')[1])*16,   // sy
                    parseInt(image_size.split(' ')[0])*16,      //swidth
                    parseInt(image_size.split(' ')[1])*16,      //sheight
                    parseInt(coordinate_cv.split(' ')[0])*16,   //dx
                    parseInt(coordinate_cv.split(' ')[1])*16,   //sy
                    parseInt(image_size.split(' ')[0])*16,      //dwidth
                    parseInt(image_size.split(' ')[1])*16       //dheight
                    );
            };
        });
    }
