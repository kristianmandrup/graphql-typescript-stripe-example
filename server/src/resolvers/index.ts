import { IResolvers } from "graphql-tools";
import { me } from "./account/me";
import { logout } from "./session/logout";
import { login } from "./session/login";
import { register } from "./account/register";
import * as stripe from "./stripe";

const names = ["a", "b"];

export const listNames = async (_: any, props: any, __: any) => {
  const { name } = props;
  return await names.filter(val => val != name);
};

export const resolvers: IResolvers = {
  Query: {
    me,
    listNames
    // listSubscriptions: stripe.subscription.list,
    // listProducts: stripe.product.list,
    // listPlans: stripe.plan.list
  },
  Mutation: {
    register,
    logout,
    login,

    createSubcription: stripe.subscription.create,
    cancelSubscription: stripe.subscription.cancel,
    updateSubcription: stripe.subscription.update,
    reactivateSubcription: stripe.subscription.reactivate,

    changeCreditCard: stripe.creditCard.change,

    createInvoice: stripe.invoice.create,

    createPlan: stripe.plan.create,
    updatePlan: stripe.plan.update,
    deletePlan: stripe.plan.del,

    createProduct: stripe.product.create,
    updateProduct: stripe.product.update,
    deleteProduct: stripe.product.del
  }
};
