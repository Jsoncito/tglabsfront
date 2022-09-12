import axios from 'axios';

export interface Data {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: {};
}

export interface Response {
  body: any;
  response: any;
}

export const HttpClient = (data: Data) => {
  return axios({
    method: data.method,
    url: data.url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data:
      data.method === 'POST' || data.method === 'PUT'
        ? JSON.stringify(data.body)
        : null,
  });
};
