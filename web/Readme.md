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
