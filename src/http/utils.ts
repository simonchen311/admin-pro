import service from '@/http/request';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

// BaseResponse 为 res.data 的类型
// T 为 res.data.data 的类型 不同的接口会返回不同的 data 所以我们加一个泛型表示
// 此处相当于二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
	const conf = config;
	return new Promise((resolve, reject) => {
		service.request<any, AxiosResponse<BaseResponse>>(conf).then((res: AxiosResponse<BaseResponse>) => {
			const { data, code, message } = res.data;
			// 如果data.code为错误代码返回message信息
			if (code != 0) {
				ElMessage({
					message: message || '网络请求异常',
					type: 'error'
				});
				reject(message);
			} else {
				ElMessage({
					message: message,
					type: 'success'
				});
				// 此处返回data信息 也就是 api 中配置好的 Response类型
				resolve(data as T);
			}
		});
	});
};

export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'GET', params: parms });
}

export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'POST', data: data });
}

export function put<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'PUT', params: parms });
}

export function del<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
	return requestInstance({ ...config, url, method: 'DELETE', data: data });
}
