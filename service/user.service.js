import axios from "axios";



export class UserService
{


    constructor({ API_PREFIX })
    {
        this.SEARCH_PATH = `${ API_PREFIX }/users`;
        this.CREATE_PATH = `${ API_PREFIX }/users`;

    }

    async create({ name, email, roles })
    {
        return axios( this.CREATE_PATH, {
            method: 'POST',
            data: {
                roles,
                email,
                name,
            },
        });
    }

    async search()
    {
        return axios( this.SEARCH_PATH );
    }

}