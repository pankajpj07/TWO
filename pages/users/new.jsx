import { Form, Dropdown, Button, ButtonGroup, InputGroup, ToggleButtonGroup, ToggleButton, Badge } from "react-bootstrap";
import { roleService, userService } from "../../service";
import { WithLayout } from "../../component/layout";
import { useState, useEffect, useRef } from "react";
import Router from 'next/router'



const NewUserPage = () =>
{
    const formName = useRef( null );
    const formEmail = useRef( null );
    const [ roles, setRoles ] = useState( [] );
    const [ selectedRoles, setSelectedRoles ] = useState( [] );
    
    useEffect( () =>
    {
        roleService.search().then( ({ data: { content } }) => setRoles( content ) );
    }, [] );

    const toggleSelectRole = role =>
    {
        setTimeout( () =>
        {
            if ( selectedRoles.includes( role ) )
            {
                setSelectedRoles( selectedRoles.filter( _role => _role !== role ) );
            } else {
                setSelectedRoles( [ ...selectedRoles, role ] );
            }
        });
    };
    const onFormSubmit = ( $event ) =>
    {
        $event.preventDefault();

        const roles = selectedRoles;
        const name = formName.current.value;
        const email = formEmail.current.value;
        
        userService
            .create({ name, email, roles })
            .then( () => Router.push( '/users' ) );
    };

    return <>
    <Form onSubmit={ onFormSubmit }>
        <Form.Group>
            <Form.Label>
                Name
            </Form.Label>
            <Form.Control type="text" placeholder="Name" ref={ formName } required/>
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type="email" placeholder="Email" ref={ formEmail } required/>
        </Form.Group>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                Roles :
                </InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Append>
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        { selectedRoles.length
                            ? selectedRoles.map( role =>
                                <Badge variant="warning" key={ Math.random() } style={{ marginRight: '2px' }}>
                                    { role }
                                </Badge>)
                            : <Badge variant="dark">&lt;none&gt;</Badge> }
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    {
                    roles.map( role =>
                        <Dropdown.Item
                            key={ Math.random() }
                            onClick={ () => toggleSelectRole( role) }
                            variant={ selectedRoles.includes( role ) ? 'warning' : null }>
                            { role }
                        </Dropdown.Item>)
                    }
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup.Append>
        </InputGroup>
        
        <hr/>
        <Button type="submit">
            Create
        </Button>
    </Form>
    </>
};


export default WithLayout( NewUserPage );