import { environment } from '../../environments/environment' ;
const host: string = environment.host;
const system = {
	depart: {
		list: host + '/system/department/tree',
		opera: host + '/system/department',
	},
	menu: {
		tree : host + '/system/menu/tree',
		menu : host + '/system/menu'
	},
	role: {
		list: host + '/system/role'
	},
	staff: {
		staff : host + "/system/staff" ,
		login : host + "/system/staff/login"
	} ,
	shop : host + "/system/shop" ,
};

const gallery = {
	type: host + '/gallery/type' ,
	list: host + '/gallery/list'
};

export const API = {
	system: system,
	gallery: gallery
};
