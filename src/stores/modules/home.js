import { categories, getHotSuggests, houseList } from "@/services";
import { defineStore } from "pinia";

export const useHomeStore = defineStore('home',{
  state:() => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentpage: 1
  }),
  actions:{
    async bingHotSuggests() {
      const res = await getHotSuggests()
      // console.log(res.data)
      this.hotSuggests = res.data
    },
    async getCategories() {
      const res = await categories()
      this.categories = res.data
    },
    async getHouseList() {
      if(this.currentpage === 4) this.currentpage = 1
      const res = await houseList(this.currentpage++)
      // console.log(res.data)
      this.houseList.push(...res.data)
    }
  }
})
