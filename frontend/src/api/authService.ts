import { request } from './apiCall';

const login = async (username: string, password: string) => {
    return request('POST', '/auth/login', { username, password });
}

const register = async (username: string, password: string) => {
    return request('POST', '/auth/register', { username, password });
}
    
export default {
    login,
    register
}