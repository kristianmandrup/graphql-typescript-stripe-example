export const getCustomerSubscription = (stripeCustomer: any) => {
  const [subscription] = stripeCustomer.subscriptions.data;
  return subscription;
};
