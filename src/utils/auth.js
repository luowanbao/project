import { TOKEN } from './common'

export const isLogin = () => {
    if (localStorage.getItem(TOKEN)) {
        return true
    } else {
        return false
    }
}

export const setToken = (token) => {
    localStorage.setItem(TOKEN, token)
}

export const getToken = () => {
    return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN)
}