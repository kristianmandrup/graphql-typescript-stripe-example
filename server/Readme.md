# Server

## Start server

Ensure you have Postgres DB installed and running as a daemon process.

See these videos:

- [Docker PostgreSQL Tutorial with Persistent Data](https://www.youtube.com/watch?v=G3gnMSyX-XM)
- [Docker Compose Tutorial with PostgreSQL and Node.js](https://www.youtube.com/watch?v=A9bA5HpOk30)

## Docker build

Build docker image using `Dockerfile` and tag it as: `stripe-example-multi-stage`

- `docker build -t stripe-example-multi-stage .`

Now we can reference that image from within `docker-compose.yml` :)

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

### Subscription

#### create

- `findUser` DB
- `stripeIdFromCustomer` stripe API
- `updateCustomer` stripe API
- `updateUser` DB

#### cancel

- `findUser` DB
- `retrieveStripeCustomer` stripe API
- `getCustomerSubscription` stripe API
- `deleteSubscription` stripe API
- `deleteCard` stripe API
- `setUserType` DB

### Session

#### login

- `findOne` User matching on `email`
- compare password via `bcrypt`
- set session on request

#### logout

- destroy user session on server
- clear cookie on request
