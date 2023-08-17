import axiosClient from "./axiosClient_zero"

const sanphamApi = {
    banchay: (params) => {
        const url = '/hanghoa/list_hot_items';
        return axiosClient.post(url, params)
    },
    listmotasp: (params) => {
        const url = '/hanghoa/listmotasp';
        return axiosClient.post(url, params)
    },
}

export default sanphamApi;