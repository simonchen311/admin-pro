interface IRole {
	roleId: number; // 角色id
	roleName: string; // 角色名称
	authority: any[];
}

// 有权限的角色接口
interface IRoleWithAuth {
	roleId: number;
	roleName: string;
	authority: any[];
}
