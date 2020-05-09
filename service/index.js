import { UserService } from './user.service';



const API_PORT = 3000;
const API_HOST = 'http://localhost';
const API_PREFIX = `${ API_HOST }:${ API_PORT }/api`

export const userService = new UserService({ API_PREFIX });