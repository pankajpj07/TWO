import { Form, Dropdown, Button } from "react-bootstrap";
import { WithLayout } from "../../component/layout";
import { useState, useEffect } from "react";
import { roleService } from "../../service";



const NewUserPage = () =>
{
    const [ roles, setRoles ] = useState( [] );
    
    useEffect( () =>
    {
        roleService.search().then( ({ data: { content } }) => setRoles( content ) );
    }, [] );

    return <>
    <Form>
        <Form.Group>
            <Form.Label>
                Name
            </Form.Label>
            <Form.Control type="text" placeholder="Name"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group>
            <Dropdown >
                <Dropdown.Toggle size="sm" variant="secondary">
                    Roles
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                    roles.map( role =>
                    <Dropdown.Item key={ Math.random() }>
                        { role }
                    </Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        <hr/>
        <Button>
            Create
        </Button>
    </Form>
    </>
};


export default WithLayout( NewUserPage );