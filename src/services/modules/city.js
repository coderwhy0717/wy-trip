import wyRequset from '../requset'

export function getCityAll() {
  return wyRequset.get({
    url:'/city/all'
  })
}
