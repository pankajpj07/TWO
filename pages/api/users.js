import { USERS, USER_ID } from '../../utility/cache';
import { serveResponse } from '../../utility/util';



export default ( request, response ) =>
{
    switch ( request.method )
    {
        case 'GET':
            serveResponse( response, {
                status: 'success',
                content: USERS,
                code: 200,
            });
            break;

        case 'POST':
            const { name, email, roles } = request.body;
            const user = {
                id: ++USER_ID.current,
                roles, email, name,
            };

            USERS.push( user );
            serveResponse( response, {
                status: 'success',
                content: user,
                code: 201,
            });
            break;

        default:
            break;
    }
};