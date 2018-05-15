import wepy from 'wepy'

// 封装一个用于发送请求的函数 wxRequest
// url请求地址
// params 参数对象
const wxRequest = (url, params = {}) => {
  return wepy.request({
    url: wxRequest.baseUrl + url, // 开发者服务器接口地址" = 根路径 + API路径
    data: params.data || {}, // 请求的参数",
    method: params.method || 'GET', // 请求方式,默认为 GET
    dataType: params.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || {'Content-type': 'application/json'} // 设置请求头
  })
}

// 设置根路径
wxRequest.baseUrl = ''

// 把当前函数导出
export default wxRequest
