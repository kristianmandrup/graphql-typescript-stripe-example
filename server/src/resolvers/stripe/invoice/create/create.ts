import { stripe } from "../../stripe";

interface Invoice {
  amount: number;
  currency: string;
  customer: string;
  description: string;
}

export const createInvoice = async (invoice: Invoice) => {
  await stripe.invoiceItems.create(invoice);
};

export const create = async (_: any, props: any, __: any) => {
  await createInvoice(props);
};
