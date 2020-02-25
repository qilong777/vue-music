import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    timeout: 5000
    // baseURL: "http://www.h5yjy.com",
  })
  // 请求拦截器
  // instance.interceptors.request.use(config => {
  //   //处理事件
  //   //1、修改config
  //   //2、显示请求图片
  //   //3、拦截用户没有登录时的请求
  //   console.log(config);
  //   //拦截成功后需要返回
  //   return config;
  // }, err => {
  //   console.log(err);

  // })

  // //响应拦截器
  instance.interceptors.response.use(res => {
    // 处理事件
    // console.log(res);
    // 需要返回数据
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
