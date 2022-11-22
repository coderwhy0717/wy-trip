import wyRequset from '../requset'

export function getDetail(houseId) {
  return wyRequset.get({
    url:'detail/infos',
    params: {
      houseId
    }
  })
}
