import axios from 'axios'
import { BASE_URL, TIMEOUT} from './config'
import useMainStore from '@/stores/modules/main'
const mainStore = useMainStore()
class wyRequset {
  constructor(baseURL,timeout= 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      mainStore.isloading = true
      return config
    },err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isloading = false
      // console.log(res,"响应拦截")
      return res
    },err => {
      mainStore.isloading = false
      return err
    })
  }

  requset(config) {
    return new Promise((reslove,reject) => {
      this.instance.request(config).then(res => {
        // console.log(res.data,"请求返回")
        reslove(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.requset({...config,method:'get'})
  }
  post(config) {
    return this.requset({...config, method:"post"})
  }
}

export default new wyRequset(BASE_URL,TIMEOUT)
