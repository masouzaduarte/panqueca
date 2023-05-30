import axios from 'axios';

import config from 'react-native-config';

export const uri = 'https://api.openai.com/v1/chat/completions';

const api = axios.create({
  baseURL: uri,
});

export async function getToken() {
  const storageToken = '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';
  return storageToken;
}

api.interceptors.request.use(
  async (configuration) => {
    try {
        const token = await getToken();
        console.log('########## -AMBIENTE -####### - > ', uri);
        if (token)
            console.log('Authorization', `Bearer ${token}`);
        configuration.headers.Authorization = `Bearer ${token}`;
        return await Promise.resolve(configuration);
    } catch (error) {
        console.log('ERRO');
    }
},
  error => {
    console.log('ERRO');
     
  },
);

export const apiAuth = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default api;
