import { serveResponse } from '../../utility/util';
import { ROLES } from '../../utility/cache';



export default ( request, response ) =>
{
    switch ( request.method )
    {
        case 'GET':
            serveResponse( response, {
                status: 'success',
                content: ROLES,
                message: 'OK',
                code: 200,
            });
            break;

        default:
            break;
    }
};