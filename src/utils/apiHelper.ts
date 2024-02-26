import axios from 'axios'

import type { CollectionType } from '@/types'

const apiBase = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    accept: 'application/json'
  }
})
apiBase.interceptors.response.use(
  (response) => {
    console.log(`⭕ [${response.config.method}] ${response.config.baseURL}${response.config.url} - OK: `, response)
    return response
  },
  (error) => {
    console.log(`❌ [${error.response.config.method}] ${error.response.config.baseURL + error.response.config.url} - Error: `, error)
    return Promise.reject(error)
  }
)

// 取得合輯
export const apiGetCollectionList = () => {
  console.log('apiGetCollectionList')
  return apiBase
    .get('/video_list')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
}

// 建立合輯
export const apiCreateCollection = ({ name }: Pick<CollectionType, 'name'>) => {
  console.log('createCollection')
  return apiBase
    .post('/video_list', { name })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
}

// 更新合輯
export const apiUpdateCollection = ({ id, name }: Pick<CollectionType, 'id' | 'name'>) => {
  console.log('apiUpdateCollection')
  return apiBase
    .patch('/video_list', { id, name })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
}

// 刪除合輯
export const apiDeleteCollection = ({ id }: Pick<CollectionType, 'id'>) => {
  console.log('apiDeleteCollection')
  return apiBase
    .delete('/video_list', { data: { id } })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
}

// 建立影片
export const apiCreateVideo = ({ ytId, collectionId }: { ytId: string; collectionId: number }) => {
  console.log('apiCreateVideo')
  return apiBase
    .post('/player_info', { ytId, listId: collectionId })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error.response
    })
}
