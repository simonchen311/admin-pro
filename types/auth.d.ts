interface IAuth {
	name: string; // 权限名称
	roleId: number; // 角色ID
	roleList?: IAuth[]; // 角色列表 子权限
}
