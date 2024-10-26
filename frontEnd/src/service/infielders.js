import { RUTA_ALL_INFIELDERS } from '../constants/routes'
const auth = () => JSON.parse(window.localStorage.getItem('auth'))

export const getAllInfielders = async () => {
  const response = await fetch(RUTA_ALL_INFIELDERS, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + auth().token
    }
  })
  return response.json()
}