interface UserState {
	username: string;
	accessToken: string;
	refreshToken: string;
	roles: Array<string>;
}

// 用户接口
interface IUser {
	id: number;
	userName: string;
	nickName: string;
	role: IRole[];
}
// 用户查询接口
interface IQueryUser {
	nickName: string; // 用户别名
	role: number; // 角色编号
}
// 用户编辑接口
interface IUserEdit {
	id: number; // 用户id
	nickName: string; // 用户昵称
	role: number[]; // 用户角色
	userName: string; // 用户名
}
