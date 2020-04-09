/**
 * @description 初始化请求地址
 * @param url 地址
 */
export function initUrl(url) {

    let releaseUrl = 'http://test'
    let devUrl = 'http://123.57.246.191'
    
    if (process.env.NODE_ENV==='production')
    {
        return releaseUrl + url
    }
    else{
        return devUrl + url
    }


}