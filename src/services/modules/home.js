
import wyRequset from '../requset'

export function getHotSuggests() {
  return wyRequset.get({
    url:'/home/hotSuggests'
  })
}

export function categories() {
  return wyRequset.get({
    url:'/home/categories'
  })
}

export function houseList(currentpage) {
  return wyRequset.get({
    url:'/home/houselist',
    params: {
      page: currentpage
    }
  })
}
