import axios from "axios";



export class RoleService
{


    constructor({ API_PREFIX })
    {
        this.SEARCH_PATH = `${ API_PREFIX }/roles`;

    }

    async search()
    {
        return axios( this.SEARCH_PATH );
    }

}