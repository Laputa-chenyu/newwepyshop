// 1.导入封装好的 wxRequest 方法
import wxRequest from '../utils/wxRequest'

// 2.导入全局路径
import appConfig from '../utils/appConfig'

// 3.设置请求API的根路径
wxRequest.baseUrl = `${appConfig.HTTP_BASE_URL}api/public/v1/`

// 4.封装请求的API, 这里的方法类似 axios
const getHomeSwiper = params => {
  return wxRequest('home/swiperdata', params).then(res => res.data)
}

// 5.把封装的API方法导出, 这里统一导出
export default {
  getHomeSwiper
}
