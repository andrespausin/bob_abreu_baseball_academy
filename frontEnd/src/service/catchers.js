import { RUTA_ALL_CATCHERS } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllCatchers = async () => {
  const response = await fetch(RUTA_ALL_CATCHERS, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}
