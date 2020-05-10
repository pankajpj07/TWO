import { Table, Badge, ButtonGroup, Button } from "react-bootstrap";
import { WithLayout } from "../component/layout";
import { useState, useEffect } from "react";
import { userService } from "../service";
import Router from "next/router";



const UsersPage = () =>
{
    const [ users, setUsers ] = useState( [] );

    useEffect( () =>
    {
        userService.search().then( ({ data: { content } }) => setUsers( content ) );
    }, [] );
    

    return <>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roles</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
            users.map( ({ id, name, email, roles }, index ) =>
            <tr key={ Math.random() }>
                <th>{ index + 1 }</th>
                <td>{ name }</td>
                <td>{ email }</td>
                <td>
                    {
                    roles.map( role =>
                        <Badge key={ Math.random() } variant="warning" style={{ marginRight: '2px' }}>
                            { role }
                        </Badge>)
                    }
                </td>
                <td>
                    <ButtonGroup size="sm">
                        <Button
                            variant="primary"
                            onClick={ () => Router.push( `/users/${ id }/edit` )}>
                            Edit
                        </Button>
                        <Button
                            variant="danger"
                            onClick={ () =>
                                userService
                                    .delete({ id })
                                    .then( () => Router.reload() )}>
                            Delete
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>)
            }
        </tbody>
        </Table>
    </>;
};



export default WithLayout( UsersPage );