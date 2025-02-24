const BASE_URL = 'http://localhost:5000';

class APIError extends Error {
    status: number;
    constructor(message: string, status = 500) {
      super(message);
      this.status = status;
    }
}

const headers: { 'Content-Type': string; 'Authorization'?: string } = {
    'Content-Type': 'application/json'
};



const request = async (method: string, url: string, body?: any ) => {
    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const options = body ? { method, headers, body: JSON.stringify(body) } : { method, headers }
    let response;
    try {
        const url_with_base = `${BASE_URL}${url}`;
        response = await fetch(url_with_base, options)
    }
    catch(error: unknown) {
        let message = 'Unknown Error';
        if (error instanceof Error) {
            message = error.message;
        }
        throw new APIError(`API cannot be reached, ${message}`)
    }
    const data = await response.json();
    if (data.error) {
        throw new APIError(data.error, data.status);
    }
    return data;
}

export {
    APIError,
    request,
    BASE_URL
}