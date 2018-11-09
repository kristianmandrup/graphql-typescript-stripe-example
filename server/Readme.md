# Server

## Start server

Ensure you have Postgres DB installed and running as a daemon process.

See these videos:

- [Docker PostgreSQL Tutorial with Persistent Data](https://www.youtube.com/watch?v=G3gnMSyX-XM)
- [Docker Compose Tutorial with PostgreSQL and Node.js](https://www.youtube.com/watch?v=A9bA5HpOk30)

## Docker build

Build docker image using `Dockerfile` and tag it as: `stripe-example-multi-stage`

- `docker build -t stripe-example-multi-stage .`

The `web` service in `docker-compose.yml` is based on the `stripe-example-multi-stage`

```yml
services:
  db:
    image: postgres
    # ...
  web:
    image: stripe-example-multi-stage
    depends_on:
      - db
    ports:
      - "4000:4000"
```

If the docker image `stripe-example-multi-stage` builds without error, you should be able to run:

- `docker-compose up`

Which will run the `db` image `postgres` AND the `web` image `stripe-example-multi-stage`

This will effectively be your server and you can now run the client that will connect to the server through Apollo Client.

The `web` image of the docker compose will run the NodeJS web (express) server and expose the GraphQL api on `localhost:4000`

## Web server (GraphqL and DB)

You can also run the web server directly as follows:

```bash
$ yarn start
yarn run v1.5.1
warning package.json: No license field
warning ../package.json: No license field
$ nodemon --exec ts-node src/index.ts
[nodemon] 1.18.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `ts-node src/index.ts`
🚀 Server ready at http://localhost:4000/graphql
```

Server is ready for action!

### Troubleshooting

If TypeScript fails to build the dist on the image (via `tsc -b`), it could be well be an issue with uppercase vs lowercase letters in the filename. For file references in `import` statements, make sure they match the filename exactly!

## DB

### User entity

- `email` the user email (for login, ie. authentication)
- `password` the user password (for login, ie. authentication)
- `stripeId` the StripeID of the customer account for the User on Stripe
- `type` if user has paid or is on free trial
- `ccLast4` (last 4 digits on credit card)

## Resolvers

- `Credit card`
- `Subscription`
- `Session`

### Credit card

#### change

- `findPaidUser` DB
- `updateCustomer` stripe API
- `updateUser` DB

Change credit card only makes sense if user has already paid for a subscription and thus had already registered a credit card.

### Subscription

#### create

- `findUser` DB
- `stripeIdFromCustomer` stripe API
- `updateCustomer` stripe API
- `updateUser` DB

Creating a new subscribtion only makes sense if user has is on `free-trial` and has not yet paid for a subscription.

#### cancel

- `findUser` DB
- `retrieveStripeCustomer` stripe API
- `getCustomerSubscription` stripe API
- `deleteSubscription` stripe API
- `deleteCard` stripe API
- `setUserType` DB

Cancel subscription only makes sense if user has already paid for a subscription.

### Session

#### login

- `findOne` User matching on `email`
- compare password via `bcrypt`
- set session on request

#### logout

- destroy user session on server
- clear cookie on request

## Resolvers

See [Resolvers](./Resolvers.md)

## GraphiQL test endpoints

Go to [http://localhost:4000/graphql](http://localhost:4000/graphql)
