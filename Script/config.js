const isPro = process.env.NODE_ENV == "production"

const config = isPro?{
  // baseUrl:'http://172.16.7.176:8085/api/'  
  // baseUrl:'/api/'  
  baseUrl:'http://121.41.53.68:8085/api/'
}:{
    baseUrl:'/api/'  
}

export {
  config,
}