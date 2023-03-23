import axios from 'axios'

interface httpClient {
  method: 'POST' | 'GET'
  url: string
  data?: any
}

export interface Result {
  statusCode: number
  data: any
}

export const httpClient = async ({url, method, data}:httpClient):Promise<Result> => {
  try {
    const response = await axios({
      url,
      method,
      data
    })
    return {
      statusCode: response.status,
      data: response.data
    }
  } catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Something went wrong'
      }
    }
  }
 
}