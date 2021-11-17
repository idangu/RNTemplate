
import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
const axiosMockInstanceLive = axios.create();
const axiosMockInstanceDemo = axios.create();
let isAxioMock = false;



export const axiosMockAdapterInstance= new 
AxiosMockAdapter(axiosMockInstanceDemo, { delayResponse: 0 });
export default isAxioMock? axiosMockInstanceDemo : axiosMockInstanceLive;