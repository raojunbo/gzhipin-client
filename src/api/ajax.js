import axios from "axios";
// 导出函数
export  function ajax(url, data = {}, type = 'GET') {
    if (type === 'GET') {
        let paramStr = ''
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        })
        if (paramStr) {
            paramStr = paramStr.substring(0, paramStr.length - 1)
        }
        // axios返回一个promise
        return axios.get(url + '?' + paramStr)
    } else {
        return axios.post(url, data)
    }
}
