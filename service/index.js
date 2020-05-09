import { UserService } from './user.service';
import { RoleService } from './role.service';



const API_PORT = 3000;
const API_HOST = 'http://localhost';
const API_PREFIX = `${ API_HOST }:${ API_PORT }/api`

export const roleService = new RoleService({ API_PREFIX });
export const userService = new UserService({ API_PREFIX });