import { get } from '@/http/utils';

export const getProjectList = async () => {
	return get({}, '/projects', {});
};
