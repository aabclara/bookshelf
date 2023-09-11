import { api } from '../../api'
//requisições
export interface IRegister {
    name?: string
    email?: string
    password?: string
}
export interface IAuthenticate {
    email?: string
    password?: string
}
//respostas das requisições
export interface IUser { 
    id: number
    name: string
    email: string
}
export interface IUserLogin {
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}
class UserData {
    register(data: IRegister) {
        return api.post<IUser>('/register', data); //<Dado que será retornado após o cadastro IUser>
    }
    login(data: IAuthenticate) {
        return api.post<IUserLogin>('/login', data); //<Dado que será retornado após o login IUserLogin>
    }
    updateToken(token: string) {
        return api.put('/user', {token})
    }
}
export default new UserData()