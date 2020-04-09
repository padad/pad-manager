import axios from 'axios'

import qs from 'qs'

import router from '@/router'
import * as UrlUtil from './UrlUtil'




// axios 配置
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
// axios.defaults.withCredentials = true
 
export function get(url, params) {
  var linkName = store.state.linkName
  return new Promise((resolve, reject) => {
    axios
      .get(BASE + url, {
        params: Object.assign(
          {
            route: router.history.current.name,
            linkName: linkName
          },
          params
        )
      })
      .then(
        response => {
          
          resolve(response)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        
        reject(error)
      })
  })
}

export function deletes(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(
        url,
        qs.stringify(params, {
          depth: 10
        })
      )
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export function upload(url,params){
  let config = {
    headers: {'Content-Type': 'multipart/form-data'}
  }

  return new Promise((resolve, reject) => {
      // 添加请求头
      axios.post(url, params, config)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })

  

}


export function post(url, params) {

  let config = {
    headers:{
      'Content-Type':'application/json'
    }
  }
  let REQUESTURL =  UrlUtil.initUrl(url)
  
  return new Promise((resolve, reject) => {
    axios
      .post(
        REQUESTURL,
        params,
        config
        
      )
      .then(
        response => {
          
          resolve(response.data)
        },
        err => {
          
          reject(err)
        }
      )
      .catch(error => {
        
        reject(error)
      })
  })
}




