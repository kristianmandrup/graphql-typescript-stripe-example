# Web client

## Routes

- `main`

## Modules

- `main`
- `account`
- `user`
- `session`

### Main

- `home`
- `register`
- `account`
- `paid users`

### Session

Renders login and logout routes

### User

- `form`
- `login`
- `logout`
- `register`

### Account

`Account` displays either:

- `noData`
- `redirectTologin` (redirect to login screen if not yet logged in)
- `subscribeOnFreeTrial` (display `SubscribeUser` (pay) when user is on a free trial)
- `display` (display paid user account, including available actions: `ChangeCreditCard` and `CancelSubscription`)

#### Action views

- `CancelSubscription`
- `ChangeCreditCard` via `StripeCheckout`
- `SubscribeUser` via `StripeCheckout`
- `PaidUsers`

`ChangeCreditCard` only makes sense if user has already paid.
`SubscribeUser` is available to free trial user to become paid users.

## Environment variables

Make sure you have created an `.env` file, see [Environment variables](./Env-variables.md) for details. If not, create the `.env` file and restart the server.

## Testing

Click `register` and register an account. Then (optionally) `login` and refresh.
Now you should see the `account` menu option.
Click `account` and then click the stripe `Pay with card` button to get the Stripe Checkout modal. Now use a valid email (f.ex use your own or use a temporary)

### Stripe checkout using fake cards

See [Stripe Testing](https://stripe.com/docs/testing)

Go to [Stripe Testing cards](https://stripe.com/docs/testing#cards) and use the cards there on the Stripe checkout modal for the React app.

See [Video clip: on using fake cards](https://www.youtube.com/watch?v=Yr6HOyWUCgE&t=5m0s)
