import React from 'react';
import {parse} from 'cookie';
import {decode} from '../utils/jwt_encode_decode';

export async function getServerSideProps(context) {
  if ('cookie' in context.req.headers) {
    const cookie = parse(context.req.headers.cookie);
    if ('app_auth' in cookie) {
      let session;
      try {
        session = decode(cookie.app_auth);
      } catch (e) {
        console.log(e);
        return {
          redirect: {
            destination: '/signin',
          },
        };
      }
      if (session.requiresOnboarding) {
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
  } else {
    console.log('app_auth not in cookie');
  }
  return {
    redirect: {
      destination: '/signin',
    },
  };
}
const Signin = () => {
  return <div></div>;
};

export default Signin;
