import axios from "axios";



export class UserService
{


    constructor({ API_PREFIX })
    {
        this.BASE_PATH = `${ API_PREFIX }/users`;

    }

    async create({ name, email, roles })
    {
        return axios( this.BASE_PATH, {
            method: 'POST',
            data: {
                roles,
                email,
                name,
            },
        });
    }

    async search({ id } = {})
    {
        return axios( this.BASE_PATH + ( id ? `/${ id }` : '' ) );
    }

    async update({ id, name, email, roles })
    {
        return axios( `${ this.BASE_PATH }/${ id }`, {
            method: 'PUT',
            data: {
                roles,
                email,
                name,
            },
        });
    }

    async delete({ id })
    {
        return axios( `${ this.BASE_PATH }/${ id }`, {
            method: 'DELETE',
        });
    }

}