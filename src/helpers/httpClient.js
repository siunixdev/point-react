import axios from 'axios'

const getService = (url, headers) => {
  return new Promise((resolve, reject) => {
    axios.get(url, headers)
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
  })
}

const postService = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, headers)
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
  })
}

const putService = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data, headers)
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
  })
}

const patchService = (url, data, headers) => {
  return new Promise((resolve, reject) => {
    axios.patch(url, data, headers)
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
  })
}

const deleteService = (url, headers) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, headers)
      .then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
  })
}

const httpClient = {
  getService,
  postService,
  putService,
  patchService,
  deleteService
}

export default httpClient