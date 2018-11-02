# Environment variables

Go to [API keys](https://dashboard.stripe.com/account/apikeys)
Click display secret key and make it available to your app in a safe way.

Add the keys and other configurations to your app via Enviroment variables:

See video [Creating a Customer in Stripe: Part 3](https://www.youtube.com/watch?v=Yr6HOyWUCgE)

- `process.env.REACT_APP_STRIPE_PUBLISHABLE` stripe key
- `process.env.PUBLIC_URL`

A good option for handling env variables is to use [dotenv](https://github.com/motdotla/dotenv) which is used in this project by default.

You can use different `.env` files to target specific environments:

- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

```txt
PUBLIC_URL=https://xyz.com
REACT_APP_STRIPE_PUBLISHABLE=key123
```
