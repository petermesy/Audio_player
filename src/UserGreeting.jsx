function UserGreeting(props){
return (props.isLggedIn? <h2>Wellcome {props.username}</h2>:<h2>Please log in to continue</h2>);
   
}
export default UserGreeting