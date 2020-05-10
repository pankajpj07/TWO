export const serveResponse = ( response, {
    code = 404,
    errors = [],
    content = null,
    status = 'error',
    message = 'Not Found',
    headers = { 'Content-Type': 'application/json' },
} = {}) =>
{
    response.statusCode = code;
    Object.keys( headers ).forEach( key =>
        response.setHeader( key, headers[ key ] ) );
    response.send( JSON.stringify({
        status,
        content,
        ... errors.length ? { message, errors } : {},
    }) );
};