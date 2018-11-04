import { stripe } from "../../stripe";

interface Item {
  plan: string;
}

interface Invoice {
  items: Item[];
  customer: string;
  billing: string;
  days_until_due: number;
}

// If you would like to send out invoices that bill on a regular interval, start by
// creating a subscription, with billing on the Subscription object set to send_invoice

// const subscription = stripe.subscriptions.create({
//   customer: 'cus_4fdAW5ftNQow1a',
//   items: [{plan: 'plan_CBb6IXqvTLXp3f'}],
//   billing: 'send_invoice',
//   days_until_due: 30,
// });

export const createInvoice = async (invoice: Invoice) => {
  await stripe.invoices.create(invoice);
};

export const create = async (_: any, props: any, __: any) => {
  await createInvoice(props);
};
