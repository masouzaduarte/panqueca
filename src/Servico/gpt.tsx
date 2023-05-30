
import api from './api';



export async function obterChat(props): Promise<unknown> {
  // console.log('VOU OBTER DADOS SUPERVISOR');

  const headers = {
    'Content-Type': 'application/json',
  };
  
  try {
    const response = await api.post('', props, {
      headers: headers,
    });
   
    return response.data;
  } catch (error) {

    }
    return null;
  }
