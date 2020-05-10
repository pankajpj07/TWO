import { UserFormPresentation } from "../../component/form/user-form.presentation";
import { WithLayout } from "../../component/layout";
import { userService } from "../../service";
import Router from 'next/router'



const NewUserPage = () =>
    <UserFormPresentation user={ void 0 } onSubmit={ ({ name, email, roles }) =>
        userService
            .create({ name, email, roles })
            .then( () => Router.push( '/users' ) ) }/>;


export default WithLayout( NewUserPage );