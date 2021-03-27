import useFetch from "../hooks/useFetch";

const ProfilePicture = ({ id }) => {
    
    // get user who posted by id
    const { data: user } = useFetch('users/' + id);

    const userFullName = `${user.firstName} ${user.lastName}`;
    
    return ( 
        <img className="profile-picture" src={user.profilePicture} alt={ userFullName.match(/\b\w/g).join('') }/>
     );
}
 
export default ProfilePicture;