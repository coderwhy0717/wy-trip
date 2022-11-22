import { defineStore } from 'pinia'
import { getCityAll } from '@/services'
export const useCityStore = defineStore('city',{
    state: () => ({
      region: {},
      currentCity: {}
    }),
    actions:{
        async getRequestCityAll() {
          const res = await getCityAll()
          this.region = res.data
        }
    }
})
