import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {
      console.log(result)
      dispatch({
        type: actionType.SET_USER,
        user: result.user
      })
    })
    .catch(err => {
      alert(err.message)
    })
  }

  return (
    <div className='login'>
      <div className='loginContainer'>
        <img
          src='https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nzzs1/Slack_Mark_Web.png'
          alt=''
        />
        <h1>Sign in to user</h1>
        <p>whatever.slack.com</p>
        <Button onClick={ signIn }>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
