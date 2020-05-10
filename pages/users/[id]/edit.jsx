import { UserFormPresentation } from "../../../component/form/user-form.presentation";
import { WithLayout } from "../../../component/layout";
import { userService } from "../../../service";
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from "react";



const EditUserPage = () =>
{
    const { query: { id } } = useRouter();
    const [ user, setUser ] = useState( void 0 );

    useEffect( () =>
    {
        userService
            .search({ id })
            .then( ({ data: { content } }) =>
                setUser( content ) );
    }, [ id ] );

    return <UserFormPresentation user={ user } onSubmit={ ({ name, email, roles }) =>
        userService
            .update({ id, name, email, roles })
            .then( () => Router.push( '/users' ) ) }/>;
};


export default WithLayout( EditUserPage );