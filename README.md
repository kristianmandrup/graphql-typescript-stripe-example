# graphql-typescript-stripe-example

An example project of how to use Stripe with GraphQL and Typescript

YouTube Playlist: https://www.youtube.com/playlist?list=PLN3n1USn4xllF5t1GZhEwFQNDnStgupdB

0. Architecture
1. Server
1. Frontend
1. Stripe checkout and sign user up for subcription
1. How to handle free trials
1. Nav bar
1. Change credit card
1. Cancel or resubscribe
1. Styled Components

![stripe-diagram](https://raw.githubusercontent.com/benawad/graphql-typescript-stripe-example/master/stripe-diagram.png)

## Getting started

- Ensure Docker client is up and running locally
- Ensure you have a Stripe account or create one

### Server start

`$ docker-compose up`

## Web client start

`$ yarn start`

### Stripe account

- If you don't have a Stripe account: [Register](https://dashboard.stripe.com/register)
- If you have a Stripe account: [Login](https://dashboard.stripe.com/login)

You might well get a confirmation email. Be sure to click the _confirmation link_

Then you might well need to activate your account by providing additional information [here](https://dashboard.stripe.com/account/details)

Go to [developers section](https://dashboard.stripe.com/test/developers)
Optionally upgrade the API version.

Go to [API keys](https://dashboard.stripe.com/account/apikeys)
Click display secret key and make it available to your app in a safe way.

Add the keys and other configurations to your app via Enviroment variables:

### server

The server uses the following environment variables (from `.env` file)

- `process.env.STRIPE_SECRET`
- `process.env.PLAN` product plan ID

### web

The web app uses the following environment variables (from `.env` file)

- `process.env.REACT_APP_STRIPE_PUBLISHABLE` stripe key
- `process.env.PUBLIC_URL` used in service worker

A good option for handling env variables is to use [dotenv](https://github.com/motdotla/dotenv) which is used in this project by default.

You can use different `.env` files to target specific environments:

- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

Server

```txt
STRIPE_SECRET=sk_test_abc123
PLAN=plan_123xyz
```

Web

```txt
PUBLIC_URL=https://xyz.com
REACT_APP_STRIPE_PUBLISHABLE=key123
```

`STRIPE_SECRET` should be prefixed with `sk_test` while testing (ie during development).

See [Products and Plans](#products-and-plans) below for how to get the plan ID.

### Server

#### Prepare server

```bash
$ cd server
$ yarn install
```

#### Start server

`$ docker-compose up`

#### Trouble shooting

In case you get:

```bash
$ docker-compose up
Pulling db (postgres:)...
ERROR: Get https://registry-1.docker.io/v2/library/postgres/manifests/latest: unauthorized: incorrect username or password
```

Try this:

```bash
$ docker login
Authenticating with existing credentials...
Stored credentials invalid or expired
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username (xyz@gmail.com): xyz
Password: *******
Login Succeeded
```

Then `docker-compose up` should work ;)

Except you will get:

```bash
Pulling web (stripe-example-multi-stage:)...
ERROR: The image for the service you're trying to recreate has been removed. If you continue, volume data could be lost. Consider backing up your data before continuing
```

So you will have to create and push your own image ;) (see video tutorial)

### Web app

- prepare
- start

#### Prepare web app

```
$ cd ..
$ cd web
$ yarn install
```

#### Start web app

```bash
$ yarn start
Compiled successfully!

You can now view web in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.32:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

## Apollo Authentication

See [Reset store on logout](https://www.apollographql.com/docs/react/recipes/authentication.html#login-logout)

The easiest way to ensure that the UI and store state reflects the current user’s permissions is to call `client.resetStore()` after your `login` or `logout` process has completed.

This will cause the store to be cleared and all active queries to be refetched.

If you just want the store to be cleared and don’t want to refetch active queries, use `client.clearStore()` instead. Another option is to reload the page, which will have a similar effect.

## Testing Stripe checkout

See [Stripe Testing](https://stripe.com/docs/testing)

Go to [Testing cards](https://stripe.com/docs/testing#cards) and use the cards there on the Stripe checkout page for the React app.

## Products and Plans

Every plan is attached to a product, which represents the application or service offered to customers. Products can have more than one plan, reflecting variations in price and duration—such as monthly and annual pricing at different rates.

There are two kinds of products: goods and services. Goods are intended for use with the Orders API while services are for subscriptions. When creating a product, use the type parameter to specify the correct one. Service-type products have the following parameters:

- `name` the product’s name, meant to be displayable to the customer.
- `type` the product’s type, which should be service when working with subscriptions.
- `metadata` a mapping of arbitrary keys and values that you can use to store additional information about the service in a structured format.

### Plans

Plans have the following parameters:

- `product` either the ID of an existing product to associate with the plan or the properties to define a new product.
- `amount` what the customer is charged per subscription per interval.
- `interval` the billing period for the plan, which can range from a single day to a year.
- `id` a unique identifier. This is auto-generated by Stripe. You can optionally override this value, but plan ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.

The interval options are `day`, `week`, `month`, and `year`. You can also use interval_count to set more customized intervals, such as billing a customer every 30 days or every 5 months.

#### Create plan

You can create a plan either via the API or through the Dashboard by selecting a product and then clicking + Add pricing plan. The following code shows how to perform the API call, passing the ID of an existing product:

```js
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_XqWFki6J63nnvex7EW7AucbW");

const plan = stripe.plans.create({
  currency: "usd",
  interval: "month",
  product: "prod_CHxGUqw1dyKsDM",
  nickname: "Pro Plan",
  amount: 3000
});
```

For more on products and plans, see [products-and-plans](https://stripe.com/docs/billing/subscriptions/products-and-plans)

You will need to [Create a product](https://dashboard.stripe.com/subscriptions/products) as [shown here](http://www.youtube.com/watch?v=Yr6HOyWUCgE&t=15m1s) in [part 3](https://www.youtube.com/watch?v=Yr6HOyWUCgE&list=PLN3n1USn4xllF5t1GZhEwFQNDnStgupdB&index=5) of the video series.

When your product has been created, Stripe will assign it a product ID. Now click the first plan under the `Pricing plans` card (next one down) and you will be show the Plan ID for that product plan. Note: The plan ID should be prefixed with `plan_`

To switch customers over to new plan:

- Create a new plan with a new price, using the instructions above.
- Find all the customers on the old plan, using the instructions that follow.
- Update every subscription (see [upgrading and downgrading](https://stripe.com/docs/billing/subscriptions/upgrading-downgrading)) to the new plan.

### Switching plans

Assuming a customer is currently subscribed to the standard-monthly plan at $10 per month, the following code switches the customer to the pro-monthly plan (plan_CBb6IXqvTLXp3f) at $30/month:

```js
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_XqWFki6J63nnvex7EW7AucbW");

const subscription = await stripe.subscriptions.retrieve("sub_49ty4767H20z6a");
stripe.subscriptions.update("sub_49ty4767H20z6a", {
  cancel_at_period_end: false,
  items: [
    {
      id: subscription.items.data[0].id,
      plan: "plan_CBb6IXqvTLXp3f"
    }
  ]
});
```

### Create customer

Create a customer via the API and provide a `source` to serve as the stored payment method:

```js
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_XqWFki6J63nnvex7EW7AucbW");

const customer = stripe.customers.create({
  email: "jenny.rosen@example.com",
  source: "src_18eYalAHEMiOZZp1l9ZTjSU0"
});
```

### Subscribe Customer to a plan

Create the subscription by associating the plan with the customer:

```js
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_XqWFki6J63nnvex7EW7AucbW");

const subscription = stripe.subscriptions.create({
  customer: "cus_4fdAW5ftNQow1a",
  items: [{ plan: "plan_CBXbz9i7AIOTzr" }]
});
```

## Subscriptions and Customers

As you create subscriptions, keep track of them on Stripe on the [Test subscriptions](https://dashboard.stripe.com/test/subscriptions) page

For the Customers (Users), check the [Test customers](https://dashboard.stripe.com/test/customers) page

## Design

- [Server](./server/Readme.md)
- [Web client](./web/Readme.md)
