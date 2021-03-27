import useFetch from "../hooks/useFetch";

const UserName = ({id}) => {

    // get user who posted by id
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: user, isFetching } = useFetch('users/' + id);

    const userFullName = `${user.firstName} ${user.lastName}`;

    return ( 
        <h2>{ !isFetching && userFullName }</h2>
     );
}
 
export default UserName;