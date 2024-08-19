interface BaseResponse<T = any> {
	code: number | string;
	message: string;
	data: T;
}

type LoginRequest = {
	username: string;
	password: string;
};

// 刷新登录信息需要的参数
type reLoginRequest = {
	accessToken: string;
};

// 登录后返回的响应信息
type LoginResponse = {
	username: string;
	roles: Array<string>;
	accessToken: string;
};
