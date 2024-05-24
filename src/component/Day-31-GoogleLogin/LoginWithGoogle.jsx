
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { GoogleLoginButton } from 'react-social-login-buttons';

const LoginWithGoogle = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  }

  const handleLoginFailure = (error) => {
    console.error(error);
  }

  return (
    <GoogleOAuthProvider clientId="772990250236-llql0klls013lkvithkn5jq2ec35b84t.apps.googleusercontent.com">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          render={(renderProps) => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Sign in with Google
            </GoogleLoginButton>
          )}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginWithGoogle;

