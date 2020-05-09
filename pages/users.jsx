import { WithLayout } from "../component/layout";
import { Table } from "react-bootstrap";



const UsersPage = () =>
    <>
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
        </tbody>
        </Table>
    </>
    ;

export default WithLayout( UsersPage );