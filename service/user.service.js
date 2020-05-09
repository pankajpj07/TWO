import axios from "axios";



export class UserService
{


    constructor({ API_PREFIX })
    {
        this.SEARCH_PATH = `${ API_PREFIX }/users`;

    }

    async search()
    {
        console.log( '@@@', this.SEARCH_PATH  );
        
        return axios( this.SEARCH_PATH );
    }

}