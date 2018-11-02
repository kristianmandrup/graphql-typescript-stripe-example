# Environment variables

Go to [API keys](https://dashboard.stripe.com/account/apikeys)
Click display secret key and make it available to your app in a safe way.

Add the keys and other configurations to your app via Enviroment variables:

See video [Creating a Customer in Stripe: Part 3](https://www.youtube.com/watch?v=Yr6HOyWUCgE&t=7m0s)

- `process.env.STRIPE_SECRET`
- `process.env.PLAN` product plan ID

A good option for handling env variables is to use [dotenv](https://github.com/motdotla/dotenv) which is used in this project by default.

You can use different `.env` files to target specific environments:

- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

```txt
STRIPE_SECRET=sk_test_abc123
PLAN=plan_123xyz
PUBLIC_URL=https://xyz.com
REACT_APP_STRIPE_PUBLISHABLE=key123
```

`STRIPE_SECRET` should be prefixed with `sk_test` while testing (ie during development).

## Products and Plans

For plans, see [products-and-plans](https://stripe.com/docs/billing/subscriptions/products-and-plans)

You will need to [Create a product](https://dashboard.stripe.com/subscriptions/products) as [shown here](http://www.youtube.com/watch?v=Yr6HOyWUCgE&t=15m1s) in [part 3](https://www.youtube.com/watch?v=Yr6HOyWUCgE&list=PLN3n1USn4xllF5t1GZhEwFQNDnStgupdB&index=5) of the video series.

When your product has been created, Stripe will assign it a product ID. Now click the first plan under the `Pricing plans` card (next one down) and you will be show the Plan ID for that product plan. Note: The plan ID should be prefixed with `plan_`

## Subscriptions and Customers

As you create subscriptions, keep track of them on Stripe on the [Test subscriptions](https://dashboard.stripe.com/test/subscriptions) page

For the Customers (Users), check the [Test customers](https://dashboard.stripe.com/test/customers) page
