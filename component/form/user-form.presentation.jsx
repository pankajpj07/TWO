import { Form, InputGroup, Badge, Dropdown, Button } from "react-bootstrap"
import { useRef, useEffect, useState } from "react";
import { roleService } from "../../service";



export const UserFormPresentation = ({
    onSubmit = ({ id, name, email, roles }) => void 0,
    user = { id: 0, name: '', email: '', roles: [] },
}) =>
{    
    const formName = useRef( null );
    const formEmail = useRef( null );
    const [ roles, setRoles ] = useState( [] );
    const [ selectedRoles, setSelectedRoles ] = useState( user.roles );
    
    useEffect( () =>
    {
        roleService
            .search()
            .then( ({
                data: { content },
            }) => setRoles( content ) );
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
    
    return <>
    <Form onSubmit={ $event =>
    {
        $event.preventDefault();

        const roles = selectedRoles;
        const name = formName.current.value;
        const email = formEmail.current.value;
        
        onSubmit({ id: user?.id, name, email, roles });
    } }>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                Name
                </InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Append>
                <Form.Control type="text" ref={ formName } defaultValue={ user.name } required/>
            </InputGroup.Append>
        </InputGroup>
        <br/>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                Email
                </InputGroup.Text>
            </InputGroup.Prepend>
            <InputGroup.Append>
                <Form.Control type="email" ref={ formEmail } defaultValue={ user.email } required/>
            </InputGroup.Append>
        </InputGroup>
        <br/>
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>
                Roles
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
                            : <Badge variant="dark">&lt;-&gt;</Badge> }
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
}