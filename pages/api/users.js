import { USERS, USER_ID } from '../../service/cache';



export default ( request, response ) =>
{
    const data = {
        headers: {
            'Content-Type': 'application/json',
        },
        statusCode: 404,
        status: 'error',
        content: null,
        errors: [],
    };
    
    switch ( request.method )
    {
        case 'GET':
            data.statusCode = 200;
            data.status = 'success';
            data.content = USERS;
            break;

        case 'POST':
            const { name, email, roles } = request.body;
            const user = {
                id: ++USER_ID.current,
                roles, email, name,
            };

            data.status = 'success';
            data.statusCode = 201;
            data.content = user;
            USERS.push( user );
            break;

        default:
            break;
    }


    response.statusCode = data.statusCode;
    Object.keys( data.headers )
        .map( key => [ key, data.headers[ key ] ])
        .map( ( [ key, value ] ) =>
            response.setHeader( key, value ) );
    response.end( JSON.stringify({
        ...data.errors.length ? { errors: data.error } : {},
        content: data.content,
        status: data.status,
    }) );
};