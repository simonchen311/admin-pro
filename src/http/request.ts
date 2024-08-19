import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { getMessageInfo } from './status';

const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_USE_MOCK
		? import.meta.env.VITE_APP_MOCK_BASEURL
		: import.meta.env.VITE_APP_API_BASEURL,
	timeout: 15000
});

// axios实例拦截请求
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// axios实例拦截响应
service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.status === 200) {
			return response.data;
		}
		ElMessage({
			message: getMessageInfo(response.status),
			type: 'error'
		});
		return response;
	},
	(error: AxiosError) => {
		const { response } = error;
		if (response) {
			// 请求已发出，但是不在2xx的范围
			ElMessage({
				message: getMessageInfo(response.status),
				type: 'error'
			});
			return Promise.reject(response.data);
		}
		ElMessage({
			message: '网络异常,请稍后再试!',
			type: 'error'
		});
	}
);

export default service;
