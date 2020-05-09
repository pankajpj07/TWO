import { WithLayout } from "../../component/layout";
import { Form, Dropdown, Button } from "react-bootstrap";



const NewUserPage = () =>
{
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
            <Form.Label>
                Roles
            </Form.Label>
            <Dropdown >
                <Dropdown.Toggle size="sm" variant="secondary">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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