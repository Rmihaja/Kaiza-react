const ProfilePicture = ({name}) => {
    return ( 
        <img className="profile-picture" src={name.profilePicture} alt={ name.match(/\b\w/g).join('') }/>
     );
}
 
export default ProfilePicture;