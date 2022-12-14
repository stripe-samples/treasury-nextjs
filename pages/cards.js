import React from 'react';
import CardholderCreateWidget from '../components/Stripe/CardholderCreateWidget';
import CardholderWidget from '../components/Stripe/CardholderWidget';
import CardsWidget from '../components/Stripe/CardsWidget';
import {getCardholders, getCards} from '../utils/stripe_helpers.js';
import {decode} from '../utils/jwt_encode_decode';
import {parse} from 'cookie';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function getServerSideProps(context) {
  if ('cookie' in context.req.headers) {
    const cookie = parse(context.req.headers.cookie);
    if ('app_auth' in cookie) {
      const session = decode(cookie.app_auth);
      if (session.requiresOnboarding === true) {
        return {
          redirect: {
            destination: '/onboard',
          },
        };
      }
      // There is no accountId here? It's customerId, tho
      const StripeAccountID = session.accountId;
      let responseCardholders = await getCardholders(StripeAccountID);
      let responseCards = await getCards(StripeAccountID);
      return {
        props: {
          cardholders: responseCardholders.cardholders.data,
          cards: responseCards.cards.data,
          account: StripeAccountID,
        }, // will be passed to the page component as props
      };
    }
  }
  return {
    redirect: {
      destination: '/signin',
    },
  };
}

const CardHoldersAndCards = (props) => {
  return (
    <div>
      <CardholderCreateWidget />
      <CardholderWidget cardholders={props.cardholders} />
      <CardsWidget cards={props.cards} />
    </div>
  );
};

export default CardHoldersAndCards;
