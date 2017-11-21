import BaseApi from './baseApi'

export function getCinemaList() {
    return BaseApi.get('service/getCinemaList', {
    })
}

