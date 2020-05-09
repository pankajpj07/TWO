export default ( request, response ) =>
{
    response.statusCode = 200;
    response.setHeader( 'Content-Type', 'application/json' );
    response.end( JSON.stringify({
        status: 'success',
        content: [
            {
                id: 1,
                name: 'Jain',
                email: 'pankaj@jain.name',
                roles: [ 'user:read', 'user:create', 'user:update', 'user:delete' ],
            },
            {
                id: 2,
                name: 'Salathiel',
                email: 'salathiel@genese.name',
                roles: [ 'product:read', 'product:create', 'product:update', 'product:delete', 'self:read', 'self:update' ],
            },
        ],
    }) );
};