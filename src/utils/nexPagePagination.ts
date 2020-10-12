import { AxiosInstance } from 'axios'

export const nextPagePagination = async (
  currentPage: number,
  api: AxiosInstance,
  callBack
) => {
  if (currentPage <= 0 || currentPage !== Number(currentPage)) {
    const response = await api.get(`/products?pages=${1}`)
    currentPage++
    callBack(response.data)
  }

  // verify if current page is equal 1
  if (currentPage === 1) {
    const response = await api.get(`/products?pages=${currentPage + 1}`)
    currentPage++
    callBack(response.data)
  } else {
    // then current page is biggest than one
    const response = await api.get(`/products?pages=${currentPage + 1}`)
    currentPage++
    callBack(response.data)
  }
}
