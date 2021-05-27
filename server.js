/**
 *个人服务器搭建项目
 *用于展示一些美好的东西
 *同时也试试nodejs服务端的性能
 */
const
    http = require('http'),
    fs   = require('fs/promises');

http.createServer((req, res)=> {
    
    let standard_url = normalizeURL(req); 
    sendFile(res,standard_url);
    
}).listen(3000);

const
    //处理URL，需要处理协议（file，http，https）、主机（host）、参数（？**=**）、文件类型（请求文件的MIME类型）
    //简单的路由，基于文件系统
    normalizeURL = function (req) {
        
        let standard_url = new URL(`http://${req.headers.host}${req.url}`); 

        let getType = function (url) { 
            const type = url.pathname.split('/').pop().split('.');
            //类型匹配
            switch ( type.length===1 ? null : type.pop()) {
                case 'css'  : return 'text/css';
                case 'html' : return 'text/html';
                case 'js'   : return 'text/javascript';
                case 'webp' : return 'image/webp';
                case 'png'  : return 'image/png';
                case 'woff' : return 'font/woff';
                case 'woff2': return 'font/woff2';
                case 'json' : return 'application/json';
            }
        }
        
        standard_url.filetype = getType(standard_url);
        
        return  standard_url;
    },
    
    //用服务器来发送文件，要设置不同的响应头
    sendFile = async function (res, url) {
        
        let data = await fs.readFile(decodeURI(url.pathname).slice(1));
        
        
        res.setHeader('Content-Type',url.filetype);
        res.write(data);
        res.end();
        
    };
    //更新服务器内容，根据客户端的post内容
    postFile = async function (req, url) {
		
    }
