import { ROLES } from '../../service/cache';



export default ( request, response ) =>
{
    response.statusCode = 200;
    response.setHeader( 'Content-Type', 'application/json' );
    response.end( JSON.stringify({
        status: 'success',
        content: ROLES,
    }) );
};