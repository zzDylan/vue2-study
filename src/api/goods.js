import request from '@/request'

export function getGoods(){
	return request({
		url:'api/goods',
		method:'get'
	})
}