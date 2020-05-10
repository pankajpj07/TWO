import { serveResponse } from "../../../utility/util";
import { USERS } from "../../../utility/cache";



export default ( request, response ) =>
{
    const { id } = request.query;
    const index = USERS.findIndex( ({ id: _id }) => _id == id );

    if ( 0 > index ) return serveResponse( response, {
        errors: [

            `Could not find user with { id: ${ id } }.`,
        ],
    });

    switch ( request.method )
    {
        case 'GET':
            serveResponse( response, {
                content: USERS[ index ],
                status: 'success',
                code: 200,
            });
            break;

        case 'PUT':
            const { name, email, roles } = request.body;
            const user = { id, name, email, roles };

            USERS.splice( index, 1, user );
            serveResponse( response, {
                status: 'success',
                content: user,
                code: 200,
            });
            break;

        case 'DELETE':
            USERS.splice( index, 1 );
            serveResponse( response, {
                status: 'success',
                content: id,
                code: 200,
            });
            break;

        default:
            break;
    }
};