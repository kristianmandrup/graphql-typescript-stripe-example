# Server

## DB

### User entity

- `email` the user email (for login, ie. authentication)
- `password` the user password (for login, ie. authentication)
- `stripeId` the StripeID of the customer account for the User on Stripe
- `type` if user has paid or is on free trial
- `ccLast4` (last 4 digits on credit card)

## Resolvers

- `Credit card: change`
- `Subscription: create`
- `Subscription: cancel`

### Credit card: change

- `findPaidUser` DB
- `updateCustomer` stripe API
- `updateUser` DB

### Subscription: create

- `findUser` DB
- `stripeIdFromCustomer` stripe API
- `updateCustomer` stripe API
- `updateUser` DB

### Subscription: cancel

- `findUser` DB
- `retrieveStripeCustomer` stripe API
- `getCustomerSubscription` stripe API
- `deleteSubscription` stripe API
- `deleteCard` stripe API
- `setUserType` DB
