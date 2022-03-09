export function setToken (token) {
    sessionStorage.setItem('token',token)
    // sessionStorage.setItem('key',value)
}
export function getToken () {
 return sessionStorage.getItem('token')
}
export function removeToken () {
    sessionStorage.removeItem('token')
}