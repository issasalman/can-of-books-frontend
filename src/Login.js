import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title> PLease Log in to See your Profile</Card.Title>
          <Card.Text>
       
          </Card.Text>
       
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
