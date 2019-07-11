var originalJsonp = require('jsonp')
const OPTION = {
  param: 'jsonpCallback',
  prefix: 'callback'
}
// import {CODE_SUCCESS} from './config'
//  jsonp = (url, option) => {
//     return new Promise((resolve, reject) => {
        // buildUrl将传进来的参数拼成一个get的请求方式
        originalJsonp('http://m.maoyan.com/ajax/movieOnInfoList?token=',OPTION, (err, res) => {
            if (!err) {
                if(res && res.status === 200 ){

                  console.log(res)
                }else{
                  console.log(err)
                }
            } else {
              console.log(err)
            }
        })
//     })
// }
/**
 * @param {*} url baidu.com
 * @param {*} data {a:1,b:2}
 * baidu.com?a=1&b=2 [a=1,b=2]
 */
// function buildUrl(url, data) {
//     let param = [];
//     for (var k in data) {
//         // 中文路径会出错 要记得encodeURIComponent编码
//         // decodeURIComponent解码
//         param.push(`${k}=${encodeURIComponent(data[k])}`)
//     }
//     let paramStr = param.join('&');
//     if (url.indexOf('?') === -1) {
//         url += "?" + paramStr
//     }else{
//         url = "&" + paramStr
//     }
//     return url
// }


// originalJsonp('http://s0.meituan.net/bs/?f=myfe/canary:/js/common-c0bc5c3a.js',OPTION).then(res =>{
//   console.log(res)
// })