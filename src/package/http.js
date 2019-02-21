import axios from 'axios';
import {
  getCookie
} from '@/package/cookie'
import VueRouter from 'vue-router';
// axios配置
// axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
//axios.defaults.baseURL = 'http://101.201.101.138:';//调用数据接口
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http request 拦截器，通过这个，我们就可以把cookie传给后台
axios.interceptors.request.use(
  config => {
    const touristId = getCookie('touristId'); //获取cookie
    const touristToken = getCookie('touristToken');
    //;注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'//设置跨域头部
    // }
    if (touristId) {
      config.headers = {
        'Cookie': {
          'touristId': touristId,
          'touristToken': touristToken
        }
      } //后台接受的参数
    }
    // console.log(config)
    return config;
  },
  error => {
    // console.log(error)
    // return Promise.reject(error);
    console.log(error.response.status)
    if (error.response && error.response.status === 401) {
      router.push({
        path: "/login",
        querry: {
          redirect: router.currentRoute.fullPath //从哪个页面跳转
        }
      })
    } else {
      console.log(error)
      return Promise.reject(error);
    }
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    // response.data.errCode是接口返回值，如果是401，说明cookie丢失，然后跳转到登录页
    // if (response.data.errCode == 401) {
    //   router.push({
    //     path: "/login",
    //     querry: {
    //       redirect: router.currentRoute.fullPath//从哪个页面跳转
    //     } 
    //   })
    // }
    return response;
  },
  error => {
    console.log(error.response.data.code)
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
