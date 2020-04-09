import {post} from '../axios'


//查询地址列表
export function queryAddressList(params) {
    return post('/jojo/missionbook/v1/addressList', params)
}