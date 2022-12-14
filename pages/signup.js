import React from 'react';
import SignupWidget from '../components/Stripe/SignUpWidget';
import {parse} from 'cookie';
import {decode} from '../utils/jwt_encode_decode';

export async function getServerSideProps(context) {
  if ('cookie' in context.req.headers) {
    const cookie = parse(context.req.headers.cookie);
    if (Object.keys(cookie)[0] === 'app_auth') {
      const session = decode(cookie.app_auth);
      if (session.requiresOnboarding === true) {
        return {
          redirect: {
            destination: '/onboard',
          },
        };
      }
      return {
        redirect: {
          destination: '/dashboard',
        },
      };
    }
  }
  return {
    props: {},
  };
}

const SignUp = () => {
  return (
    <div>
      <SignupWidget />
    </div>
  );
};

export default SignUp;
