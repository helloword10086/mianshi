var axios = require('axios')
axios({
  
    method: 'get',
  url:"http://m.maoyan.com/ajax/movieOnInfoList?token=",
 
 
}).then((res) =>{
  console.log(res.data)
} )