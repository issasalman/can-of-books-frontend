import { withAuth0 } from "@auth0/auth0-react";
import { Component } from "react";

class Profile extends Component {

  render() {

    const user=this.props.auth0.user;
    return(



   <div style={{ textAlign:"center" }}>
      <p>Your Personal Information</p>
 <img src={user.picture} alt="" />
        <p>Your Email is : {user.email}</p>
        <p> Your user is : {user.name}</p>
    </div>
 ) }
};

export default withAuth0(Profile);
